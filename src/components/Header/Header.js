import React from 'react';

import {
    HeaderMain,
    HeaderMainInner,
    HeaderMainNav,
    HeaderMainNavList,
    HeaderMainNavListItem,
    HeaderMainNavLink,
    LogoContainerLink,
    LogoContainerImage
} from './HeaderStyle';

import ImgLogo from '../../assets/img/logo.png';

const links = {
    speakers: 'Speakers',
    events: 'Events',
}

const Header = () => {
    return (
        <HeaderMain>
            <HeaderMainInner>
                <LogoContainerLink to="/">
                    <LogoContainerImage src={ImgLogo} alt="Logo" />
                </LogoContainerLink>
                <HeaderMainNav>
                    <HeaderMainNavList>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to="/events">{links.events}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                        <HeaderMainNavListItem>
                            <HeaderMainNavLink activeClassName="IsActiveNavLink"
                                to="/speakers">{links.speakers}</HeaderMainNavLink>
                        </HeaderMainNavListItem>
                    </HeaderMainNavList>
                </HeaderMainNav>
            </HeaderMainInner>
        </HeaderMain>
    );
}

export default Header;




