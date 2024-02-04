import express from "express";

const app = express();
const port = 3000;
app.set("view engine","ejs");
app.use(express.static('./public'));
/* Write your code here:
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
 */

app.get('/',(req,res)=>{
  res.render("index");
})
app.get('/about',(req,res)=>{
  res.render("about");
})
app.get('/contact',(req,res)=>{
  res.render("contact");
})
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
