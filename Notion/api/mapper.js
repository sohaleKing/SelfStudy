import { serializeQueryParams, isEmpty } from "./helpers"
import { mappings } from "./mappings"

const {
    hostUrl,
    urlVersion,
    versionHeaderValue,
    controllers: mappedControllers,
} = mappings

function map(app, cache, authHeaderValue) {
    mappedControllers.forEach((ctrl) => {
        const { name: controllerName, routes: controllerRoutes } = ctrl

        controllerRoutes.forEach((mapRoute) => {
            const {
                name: routeName,
                method,
                param,
                paramPath,
                subParam,
            } = mapRoute

            let routePath = controllerName

            if (param) {
                routePath += `/:${param}`

                if (paramPath) {
                    routePath += `/${paramPath}`

                    if (subParam) {
                        routePath += `/:${subParam}`
                    }
                }
            }

            app[method.toLowerCase()](`/${routePath}`, async (req, res) => {
                let notionRoutePath = controllerName

                if (param) {
                    if (!req.params[param]) {
                        return req
                            .status(400)
                            .json({ error: `Missing param ${param}` })
                    }

                    notionRoutePath += `/${req.params[param]}`

                    if (paramPath) {
                        notionRoutePath += `/${paramPath}`

                        if (subParam) {
                            if (!req.params[subParam]) {
                                return req.status(400).json({
                                    error: `Missing param ${subParam}`,
                                })
                            }

                            notionRoutePath += `/${req.params[subParam]}`
                        }
                    }
                }

                const queryString = serializeQueryParams(req.query)

                const body = isEmpty(req.body) ? { body: req.body } : undefined

                const cacheKey = JSON.stringify({
                    method,
                    notionRoutePath,
                    queryString,
                    body,
                })

                if (cache.has(cacheKey)) {
                    console.log("Using cache: " + routeName)

                    return res.json(cache.get(cacheKey))
                }

                try {
                    console.log("Calling API: " + routeName)

                    const notionUrl = `${hostUrl}/${urlVersion}/${notionRoutePath}${queryString}`

                    const response = await fetch(notionUrl, {
                        method,
                        headers: [
                            ["Authorization", authHeaderValue],
                            ["Notion-Version", versionHeaderValue],
                        ],
                        ...body,
                    })

                    const data = await response.json()

                    cache.set(cacheKey, data)

                    res.status(data.status || 200).json(data)
                } catch (error) {
                    console.log(error)

                    res.status(500).json({
                        object: "error",
                        status: 500,
                        code: "Internal Server Error",
                        message: error.message,
                    })
                }
            })
        })
    })
}

export default {
    map,
}
