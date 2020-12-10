import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Image from '@material-ui/core/CardMedia'
import { Avatar } from '@material-ui/core';

class Header extends Component {

    render() {
        return (

            <div>
                <AppBar position="static" color="white">
                    <Toolbar >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="Menu"
                            onClick={"/*프로젝트 둘러보기 페이지 입력*/"}>
                            <MenuIcon/>
                            <Typography 
                                variant="body1"
                                onClick={"/*프로젝트 둘러보기 페이지 입력*/"}>
                                프로젝트 둘러보기</Typography>
                        </IconButton>
                        <Typography 
                                variant="body1"
                                onClick={"/*프로젝트 올리기 페이지 입력*/"}>
                                프로젝트 올리기</Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Avatar src={'https://www.flaticon.com/svg/static/icons/svg/2809/2809124.svg'} />}
                                >
                                </Button>
                        <SearchIcon />
                        <Typography color="inherit">로그인/회원가입</Typography>
                    </Toolbar>
                </AppBar>
            </div>

        );
    }
}

const style = {
    flexGrow: 1,
    paddingRight: 90,
}

export default Header;