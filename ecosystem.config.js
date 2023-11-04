module.exports = {
    apps: [
      {
        name: "mern-gpt",
        script: "./backend/dist/index.js",
        args: "start -p " + (process.env.PORT || 5000),
        watch: false,
        autorestart: true,
      },
    ],
  };