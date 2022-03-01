import React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import Avatar from "@mui/material/Avatar"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const settings = ["Account", "Order History", "checkout", "Logout"]

export function HeaderSetting() {
    const [anchorElUser, setAnchorElUser] = React.useState(null)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }
    return (
        <>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge badgeContent={1} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Soheyl Rahgozar" src="/user1.jpg" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}
