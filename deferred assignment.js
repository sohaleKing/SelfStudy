function handleAuthFlow(context) {
    let user
    if (isNewUser(context)) {
        user = getnewUserInfo(context)
    } else if (isVIPUser(context)) {
        user = context.user
        user.vip = true
    } else {
        user = context.user
    }

    return user
}
