<script>
    import { loginUser } from "../api.js";
    
    let email = "";
    let password = "";
    let message = "";
    
    const handleLogin = async () => {
      try {
        const token = await loginUser(email, password);
        message = `Logged in successfully! Token: ${token}`;
      } catch (error) {
        message = error.response?.data || "Something went wrong. Please try again later.";
      }
    };
  </script>
  
  <h1>Login</h1>
  <label>
    Email:
    <input type="email" bind:value={email} />
  </label>
  <label>
    Password:
    <input type="password" bind:value={password} />
  </label>
  <button on:click={handleLogin}>Login</button>
  <p>{message}</p>
  

  <style>
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
    }
    input[type="email"],
    input[type="password"] {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      margin-bottom: 16px;
      width: 100%;
      box-sizing: border-box;
    }
    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0062cc;
    }
    p {
      margin-top: 16px;
      color: #dc3545;
      font-weight: bold;
    }
  </style>