import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Card,
  Typography,
  Container,
  Paper,
  Divider,
} from "@mui/material";

const TokenGenerator = () => {
  const [blueTokens, setBlueTokens] = useState(0);
  const [bluePrefix, setBluePrefix] = useState("");
  const [bluePerRow, setBluePerRow] = useState(1);
  const [redTokens, setRedTokens] = useState(0);
  const [redPrefix, setRedPrefix] = useState("");
  const [redPerRow, setRedPerRow] = useState(1);
  const [tokens, setTokens] = useState({ blue: [], red: [] });

  const generateTokens = () => {
    const blueTokensArray = Array.from(
      { length: blueTokens },
      (_, i) => `${bluePrefix}${i + 1}`
    );
    const redTokensArray = Array.from(
      { length: redTokens },
      (_, i) => `${redPrefix}${i + 1}`
    );
    setTokens({ blue: blueTokensArray, red: redTokensArray });
  };

  const clearFields = () => {
    setBlueTokens(0);
    setBluePrefix("");
    setBluePerRow(1);
    setRedTokens(0);
    setRedPrefix("");
    setRedPerRow(1);
    setTokens({ blue: [], red: [] });
  };

  const renderTokens = (tokensArray, color, perRow) => {
    return (
      <Grid container spacing={1} alignItems="center">
        {tokensArray.map((token, index) => (
          <Grid item xs={12 / perRow} key={index}>
            <Card
              sx={{
                backgroundColor: color === "blue" ? "lightblue" : "lightcoral",
                textAlign: "center",
                width: "50%",
                height: 70, // Reduced height
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="body2" component="div">
                {token}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={4} sx={{ padding: 4, marginTop: 4, borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Token Generator
        </Typography>
        <Divider sx={{ marginBottom: 3 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number of Blue Tokens"
              type="number"
              fullWidth
              value={blueTokens}
              onChange={(e) => setBlueTokens(Number(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Blue Token Prefix"
              fullWidth
              value={bluePrefix}
              onChange={(e) => setBluePrefix(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Blue Tokens Per Row"
              type="number"
              fullWidth
              value={bluePerRow}
              onChange={(e) => setBluePerRow(Number(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Number of Red Tokens"
              type="number"
              fullWidth
              value={redTokens}
              onChange={(e) => setRedTokens(Number(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Red Token Prefix"
              fullWidth
              value={redPrefix}
              onChange={(e) => setRedPrefix(e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Red Tokens Per Row"
              type="number"
              fullWidth
              value={redPerRow}
              onChange={(e) => setRedPerRow(Number(e.target.value))}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={generateTokens}
              fullWidth
              sx={{ padding: 1.5, fontSize: "1rem" }}
            >
              Generate
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={clearFields}
              fullWidth
              sx={{ padding: 1.5, fontSize: "1rem" }}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
        <Box marginTop={4}>
          {tokens.blue.length > 0 && (
            <>
              <Typography
                variant="h5"
                gutterBottom
                textAlign="center"
                sx={{ marginBottom: 2 }}
              >
                Blue Tokens
              </Typography>
              {renderTokens(tokens.blue, "blue", bluePerRow)}
            </>
          )}
          {tokens.red.length > 0 && (
            <Box marginTop={4}>
              <Typography
                variant="h5"
                gutterBottom
                textAlign="center"
                sx={{ marginBottom: 2 }}
              >
                Red Tokens
              </Typography>
              {renderTokens(tokens.red, "red", redPerRow)}
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default TokenGenerator;
