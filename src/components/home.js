const Home = () =>{
    
   const name =" rehnuma bano";
//  you can js functions inside JSX using{}
   const sum =(a,b) =>{
     return a+b;
   }

   const userdetails ={
       name:"Rehnuma bano",
       email:"banorehnuma69@mail.com",
       age:23,
   };
     return(
         <div>
         <h1>HOME component</h1>
         <h2>{name}</h2>
          {sum(36,67)}
          <br/>
          <h2>Name:{userdetails.name}</h2>
          <h2>Email:{userdetails.email}</h2>
          <h2>Age:{userdetails.age}</h2>
         
         </div>
     )
}
 export default Home;