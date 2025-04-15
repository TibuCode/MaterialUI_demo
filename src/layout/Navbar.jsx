import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tab,
  Tabs,
  IconButton,
  Avatar,
  Badge,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  Bolt as BoltIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Email as EmailIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import SearchResults from '../components/SearchResults';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleTabChange = (_event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: '#16181c',
          minHeight: 60,
          borderRadius: 0 // Remove corner rounding
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo Section */}
          <Box component="img" src='src/assets/Logo.svg'/>

          {/* Navigation Tabs Section */}
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#6ec207',
                height: 3,
                borderRadius: '4px'
              },
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '100px'
            }}
          >
            <Tab
              icon={<HomeIcon />}
              sx={{
                color: activeTab === 0 ? '#fff' : '#aaa',
                '&.Mui-selected': { color: '#6ec207' },
                minWidth: 100
              }}
            />
            <Tab
              icon={<PersonIcon />}
              sx={{
                color: activeTab === 1 ? '#fff' : '#aaa',
                '&.Mui-selected': { color: '#6ec207' },
                minWidth: 100
              }}
            />
            <Tab
              icon={<EmailIcon />}
              sx={{
                color: activeTab === 2 ? '#fff' : '#aaa',
                '&.Mui-selected': { color: '#6ec207' },
                minWidth: 100
              }}
            />
            <Tab
              icon={<NotificationsIcon />}
              sx={{
                color: activeTab === 3 ? '#fff' : '#aaa',
                '&.Mui-selected': { color: '#6ec207' },
                minWidth: 100
              }}
            />
          </Tabs>

          {/* Profile Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              onClick={handleSearchClick}
              sx={{ 
                mr: 2,
                color: '#aaa',
                '&:hover': {
                  color: '#6ec207',
                  backgroundColor: 'rgba(110, 194, 7, 0.1)'
                }
              }}
            >
              <SearchIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
              <Typography variant="body1" sx={{ mr: 1, display: { xs: 'none', sm: 'block' }, color: '#f5f5f5' }}>
                Diogo Forlan
              </Typography>
              <Avatar 
                alt="Diogo Forlan" 
                src="/avatar.jpg" 
                sx={{ 
                  border: '2px solid #6ec207',
                  '&:hover': {
                    cursor: 'pointer',
                    transform: 'scale(1.1)',
                    transition: 'transform 0.2s'
                  }
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <SearchResults open={searchOpen} onClose={handleSearchClose} />
    </>
  );
};

export default Navbar;
