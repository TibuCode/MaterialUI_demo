import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Chip, Menu, MenuItem, Fade, Tooltip } from "@mui/material";

export default function Post({ caption, img, like, comment, view, share }) {
  const [likes, setLikes] = useState(like);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prevLikes) => prevLikes - 1);
    } else {
      setLikes((prevLikes) => prevLikes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: "100%", 
        bgcolor: "#16181C", 
        borderRadius: "25px",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)"
        }
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User Avatar"
            sx={{ 
              width: 45, 
              height: 45,
              border: "2px solid #6ec207"
            }}
          />
        }
        action={
          <>
            <IconButton 
              aria-label="settings" 
              onClick={handleMenuClick}
              aria-controls={open ? 'post-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <MoreHorizIcon sx={{ color: "#f5f5f5" }} />
            </IconButton>
            <Menu
              id="post-menu"
              MenuListProps={{
                'aria-labelledby': 'post-options-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  backgroundColor: "#252525",
                  color: "#f5f5f5",
                  borderRadius: "15px",
                  minWidth: "180px",
                }
              }}
            >
              <MenuItem onClick={handleMenuClose}>Báo cáo bài viết</MenuItem>
              <MenuItem onClick={handleMenuClose}>Ẩn bài viết</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sao chép liên kết</MenuItem>
            </Menu>
          </>
        }
        title={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography
              variant="body1"
              color="#f5f5f5"
              sx={{ fontWeight: 600 }}
            >
              Diogo Forlan
            </Typography>
            <Chip 
              label="Đã xác minh" 
              size="small" 
              sx={{ 
                height: "18px", 
                backgroundColor: "#6ec207", 
                color: "#fff",
                fontSize: "0.6rem",
                fontWeight: "bold"
              }} 
            />
            <Typography variant="body1" color="#808080">
              9 giờ trước
            </Typography>
          </Box>
        }
      />
      <Box sx={{ paddingLeft: "56px" }}>
        <CardContent sx={{ paddingTop: 0 }}>
          <Typography
            variant="body2"
            sx={{ maxWidth: "480px", color: "#f5f5f5" }}
          >
            {caption}
          </Typography>
        </CardContent>
        <Box sx={{ padding: "0 16px" }}>
          <CardMedia
            component="img"
            height="auto"
            image={img}
            alt="Paella dish"
            sx={{ borderRadius: "25px" }}
          />
        </Box>
        <CardActions disableSpacing sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Tooltip title={isLiked ? "Bỏ thích" : "Thích"}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="add to favorites" onClick={handleLike}>
                  {isLiked ? (
                    <FavoriteIcon
                      sx={{ fontSize: "20px", color: "#FF0000" }}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      sx={{ fontSize: "20px", color: "#808080" }}
                    />
                  )}
                </IconButton>
                <Typography variant="body2" color="#808080">
                  {likes}K
                </Typography>
              </Box>
            </Tooltip>
            
            <Tooltip title="Bình luận">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="comment">
                  <ChatBubbleOutlineOutlinedIcon
                    sx={{ fontSize: "20px", color: "#808080" }}
                  />
                </IconButton>
                <Typography variant="body2" color="#808080">
                  {comment}K
                </Typography>
              </Box>
            </Tooltip>
            
            <Tooltip title="Lượt xem">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="trending view">
                  <TrendingUpOutlinedIcon
                    sx={{ fontSize: "20px", color: "#808080" }}
                  />
                </IconButton>
                <Typography variant="body2" color="#808080">
                  {view}M
                </Typography>
              </Box>
            </Tooltip>
            
            <Tooltip title="Chia sẻ">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="share">
                  <ShareOutlinedIcon sx={{ fontSize: "20px", color: "#808080" }} />
                </IconButton>
                <Typography variant="body2" color="#808080">
                  {share}K
                </Typography>
              </Box>
            </Tooltip>
          </Box>
          
          <Tooltip title={isSaved ? "Bỏ lưu" : "Lưu bài viết"}>
            <IconButton aria-label="bookmark" onClick={handleSave}>
              {isSaved ? (
                <BookmarkIcon sx={{ fontSize: "20px", color: "#6ec207" }} />
              ) : (
                <BookmarkBorderIcon sx={{ fontSize: "20px", color: "#808080" }} />
              )}
            </IconButton>
          </Tooltip>
        </CardActions>
      </Box>
    </Card>
  );
}
