const server = Bun.serve({
  port: 3000,
  fetch(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    return new Response(`Hello from Bun! ${query}`);
  },
});

console.log("Server is running on port:", server.port);
