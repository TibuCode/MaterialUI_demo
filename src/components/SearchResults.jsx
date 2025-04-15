import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemAvatar, 
  ListItemText, 
  Avatar, 
  Button, 
  Divider,
  Paper,
  IconButton,
  InputBase
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddDisabledIcon from '@mui/icons-material/PersonAddDisabled';

const SearchResults = ({ open, onClose }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [following, setFollowing] = React.useState({});

  // Mock data for search results
  const allUsers = [
    {
      id: 1,
      name: 'John Doe',
      username: '@johndoe',
      avatar: 'https://mui.com/static/images/avatar/1.jpg',
      bio: 'Software Developer | React Enthusiast',
    },
    {
      id: 2,
      name: 'Jane Smith',
      username: '@janesmith',
      avatar: 'https://mui.com/static/images/avatar/2.jpg',
      bio: 'UX Designer | Coffee Lover',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      username: '@mikejohnson',
      avatar: 'https://mui.com/static/images/avatar/3.jpg',
      bio: 'Photographer | Travel Blogger',
    },
    {
      id: 4,
      name: 'Sarah Williams',
      username: '@sarahw',
      avatar: 'https://mui.com/static/images/avatar/4.jpg',
      bio: 'Marketing Specialist | Dog Lover',
    },
    {
      id: 5,
      name: 'David Brown',
      username: '@davidb',
      avatar: 'https://mui.com/static/images/avatar/5.jpg',
      bio: 'Full Stack Developer | Gamer',
    },
  ];

  React.useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
    } else {
      const filteredResults = allUsers.filter(
        user => 
          user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleFollow = (userId) => {
    setFollowing(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };

  if (!open) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        top: '70px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        maxHeight: '80vh',
        overflowY: 'auto',
        backgroundColor: '#16181c',
        borderRadius: '20px',
        zIndex: 1300,
        padding: '20px',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ color: '#f5f5f5', fontWeight: 'bold' }}>
          Tìm kiếm người dùng
        </Typography>
        <IconButton onClick={onClose} sx={{ color: '#808080' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          backgroundColor: '#252525', 
          borderRadius: '25px',
          padding: '5px 15px',
          mb: 3
        }}
      >
        <SearchIcon sx={{ color: '#808080', mr: 1 }} />
        <InputBase
          placeholder="Tìm kiếm theo tên hoặc username..."
          value={searchTerm}
          onChange={handleSearchChange}
          fullWidth
          sx={{ color: '#f5f5f5' }}
        />
        {searchTerm && (
          <IconButton size="small" onClick={handleClearSearch} sx={{ color: '#808080' }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {searchTerm.trim() === '' ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', flexDirection: 'column' }}>
          <SearchIcon sx={{ fontSize: 60, color: '#808080', mb: 2 }} />
          <Typography variant="body1" sx={{ color: '#808080' }}>
            Nhập tên hoặc username để tìm kiếm
          </Typography>
        </Box>
      ) : searchResults.length === 0 ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', flexDirection: 'column' }}>
          <Typography variant="body1" sx={{ color: '#808080' }}>
            Không tìm thấy kết quả nào cho "{searchTerm}"
          </Typography>
        </Box>
      ) : (
        <List>
          {searchResults.map((user, index) => (
            <React.Fragment key={user.id}>
              <ListItem 
                sx={{ 
                  py: 2,
                  borderRadius: '10px',
                  '&:hover': {
                    backgroundColor: '#252525',
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar 
                    src={user.avatar} 
                    alt={user.name}
                    sx={{ width: 50, height: 50 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body1" sx={{ color: '#f5f5f5', fontWeight: 'bold' }}>
                        {user.name}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body2" sx={{ color: '#808080' }}>
                        {user.username}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 0.5 }}>
                        {user.bio}
                      </Typography>
                    </Box>
                  }
                  sx={{ mr: 2 }}
                />
                <Button
                  variant="contained"
                  startIcon={following[user.id] ? <PersonAddDisabledIcon /> : <PersonAddIcon />}
                  onClick={() => handleFollow(user.id)}
                  sx={{
                    backgroundColor: following[user.id] ? '#333' : '#6ec207',
                    color: '#fff',
                    borderRadius: '20px',
                    '&:hover': {
                      backgroundColor: following[user.id] ? '#444' : '#5ba206',
                    },
                  }}
                >
                  {following[user.id] ? 'Bỏ theo dõi' : 'Theo dõi'}
                </Button>
              </ListItem>
              {index < searchResults.length - 1 && (
                <Divider sx={{ backgroundColor: '#333' }} />
              )}
            </React.Fragment>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default SearchResults;