const notFound = (req,res) =>{

    res.status(404).send(`
    <h1 class = "not-found">Route does not exist</h1>
    <p class ="not-found">Go to <a href="/">Home</a></p>
  `);
}

export default notFound;