import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
  Chip,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Sidebar() {
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
      online: true,
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
      online: true,
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
      online: false,
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
      online: false,
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
      online: true,
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "360px"
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color: "#808080"}}/>
              </InputAdornment>
            ),
            style: {
              color: "#f5f5f5",
              backgroundColor: "#16181c",
              borderRadius: "25px",
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
            },
          }}
        />

        {/* Tạo khoảng cách 20px */}
        <Box sx={{ height: "20px" }} />

        <Box
          sx={{
            backgroundColor: "#16181c",
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "150px",
          }}
        >
          {/* Danh sách người liên hệ gần đây */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#f5f5f5",
                }}
              >
                Người liên hệ gần đây
              </Typography>
              <Chip 
                label={`${contacts.filter(c => c.online).length} online`} 
                size="small" 
                sx={{ 
                  backgroundColor: "#6ec207", 
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "0.7rem"
                }} 
              />
            </Box>
            
            <Divider sx={{ backgroundColor: "#333", mb: 2 }} />
            
            <List>
              {contacts.map((contact, index) => (
                <ListItem 
                  key={index} 
                  sx={{ 
                    padding: "8px 0",
                    borderRadius: "10px",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "#252525",
                    }
                  }}
                >
                  <ListItemAvatar>
                    <Box sx={{ position: "relative" }}>
                      <Avatar alt={contact.name} src={contact.avatar} />
                      {contact.online && (
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            backgroundColor: "#6ec207",
                            border: "2px solid #16181c",
                          }}
                        />
                      )}
                    </Box>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{
                      "& .MuiTypography-root": {
                        color: "#f5f5f5",
                      },
                    }}
                    primary={contact.name}
                    secondary={
                      <Typography variant="body2" sx={{ color: "#808080", fontSize: "0.8rem" }}>
                        {contact.username}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ marginTop: "8px" }}>
              <Link
                href="#"
                sx={{
                  color: "#6ec207",
                  fontWeight: "bold",
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  padding: "8px",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(110, 194, 7, 0.1)",
                  }
                }}
              >
                <Typography>Xem thêm</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
