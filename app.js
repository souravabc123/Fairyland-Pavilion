var express=require("express");
var app=express();
app.set("view engine","ejs");
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
var campgrounds=[
    {name:"Riverside Camping", image:"https://www.historicinnfe.com/wp-content/uploads/2016/12/gedrftcge67df83weij93e-634x449.jpg"},
    {name:"Forest Camping",image:"https://i0.wp.com/www.americantravelblogger.com/wp-content/uploads/2019/10/adventure-camp-camping-699558.jpg?fit=1280%2C786&ssl=1"},
    {name:"Mountainside Camping",image:"https://media.fromthegrapevine.com/assets/images/2015/6/Cold-Mountain-North-Carolina.jpg.824x0_q71.jpg"},
    {name:"Riverside Camping", image:"https://www.historicinnfe.com/wp-content/uploads/2016/12/gedrftcge67df83weij93e-634x449.jpg"},
    {name:"Forest Camping",image:"https://i0.wp.com/www.americantravelblogger.com/wp-content/uploads/2019/10/adventure-camp-camping-699558.jpg?fit=1280%2C786&ssl=1"},
    {name:"Mountainside Camping",image:"https://media.fromthegrapevine.com/assets/images/2015/6/Cold-Mountain-North-Carolina.jpg.824x0_q71.jpg"},
    {name:"Riverside Camping", image:"https://www.historicinnfe.com/wp-content/uploads/2016/12/gedrftcge67df83weij93e-634x449.jpg"},
    {name:"Forest Camping",image:"https://i0.wp.com/www.americantravelblogger.com/wp-content/uploads/2019/10/adventure-camp-camping-699558.jpg?fit=1280%2C786&ssl=1"},
    {name:"Mountainside Camping",image:"https://media.fromthegrapevine.com/assets/images/2015/6/Cold-Mountain-North-Carolina.jpg.824x0_q71.jpg"}
    
];
app.get("/",function(req,res)
{
    //homepage
    res.render("landingPage");
});
app.get("/campgrounds",function(req, res)
{
    //show existing campgrounds 
    
    res.render("campgroundsPage",{campgrounds:campgrounds});
});
app.get("/campgrounds/new",function(req,res)
{
    //create new campgrounds
    res.render("new");
});
app.post("/campgrounds",function(req,res)
{
    //add the campground details from the form to the campground page.
    var name=req.body.name;
    var image=req.body.image;
    console.log(name);
    console.log(image);
    var newCampground={name: name , image:image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");

});
app.listen(3000,function()
{
    console.log("Serving to port 3000 for Running Camping Site");
});
