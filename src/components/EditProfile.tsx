import { useState, useEffect, useRef, useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  IconButton,
} from "@mui/material";

import { Edit as EditIcon } from "@mui/icons-material";
import { AuthContext } from "../context/AuthContext";

const EditProfile: React.FC = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [firstName, setFirstName] = useState<string>(user?.firstName || "");
  const [lastName, setLastName] = useState<string>(user?.lastName || "");
  const email = user?.email || "";
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const [formErrors, setFormErrors] = useState<{
    firstName?: string;
    lastName?: string;
  }>({});
  const [isChanged, setIsChanged] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsChanged(
      firstName !== user?.firstName ||
        lastName !== user?.lastName ||
        profilePic !== null
    );
  }, [user, firstName, lastName, profilePic]);

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setProfilePic(file);
      setIsChanged(true);
    }
  };

  const validateForm = (): boolean => {
    const errors: {
      firstName?: string;
      lastName?: string;
    } = {};

    if (!firstName.trim()) {
      errors.firstName = "Firstname is a required field!";
    }

    if (!lastName.trim()) {
      errors.lastName = "Lastname is a required field!";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveProfile = () => {
    try {
      if (!validateForm()) {
        return;
      }

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);

      if (profilePic) {
        formData.append("profilePicture", profilePic);
      }

      updateUser(formData);
    } catch (err: any) {
      throw new Error(
        err.response?.data?.message || "Failed while saving user profile!"
      );
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: "auto",
        padding: 2,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          marginBottom: 4,
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: "4px solid #ccc",
            overflow: "hidden",
          }}
        >
          <Avatar
            alt={user?.firstName || ""}
            src={
              profilePic
                ? URL.createObjectURL(profilePic)
                : user?.profilePicture || ""
            }
            sx={{ widows: "100%", height: "100%", objectFit: "cover" }}
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={handleProfilePicChange}
          />
          <IconButton
            onClick={() => fileInputRef.current?.click()}
            style={{
              position: "absolute",
              bottom: 5,
              right: 5,
              backgroundColor: "white",
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            fullWidth
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            error={!!formErrors.firstName}
            helperText={formErrors.firstName}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            error={!!formErrors.lastName}
            helperText={formErrors.lastName}
            required
          />
        </Grid>
      </Grid>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        disabled
        sx={{ marginBottom: 2 }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
        }}
      >
        <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
          Change password?
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSaveProfile}
        sx={{ marginBottom: 2 }}
        disabled={!isChanged}
      >
        Save
      </Button>
    </Box>
  );
};

export default EditProfile;
