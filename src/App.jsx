import './App.css';

function MenuItem ({name, price, nutritionalInfo, imageSrc}) {
  return (
    <div className="card">
        <img src = {imageSrc} alt='' className="card-img-top"/>
      <div className="card-body">
        <h3 className="card-title"><strong>{name}</strong> | {price}</h3>
      <p className="card-text">
        <NutritionalInfo nutritionalInfo={nutritionalInfo}/>
      </p>
      </div>
    </div>
  );
}

function Category ({title, foods}){
  return (
    <div className='container'>
      <h2>{title}</h2>
      <div className="category-container">
        {foods}
      </div>
    </div>
  )
}
//varaibles
const burgers = (
  <>
    <MenuItem 
      name={"Chicken Burger"}
      price={"RM 12.00"}
      nutritionalInfo = {{calories: 531, protein: 25, carbs: 50, fat: 26}}
      imageSrc="./src/chicken burger.png"
    />
    <MenuItem 
      name={"Fish Burger"}
      price={"RM 15.00"}
      nutritionalInfo = {{calories: 531, protein: 25, carbs: 50, fat: 26}}
      imageSrc="./src/fishburger.png"
    />
    <MenuItem 
      name={"Beef Burger"}
      price={"RM 17.00"}
      nutritionalInfo = {{calories: 531, protein: 25, carbs: 50, fat: 26}}
      imageSrc="./src/beefbur.png"
    />
  </>
)

const friedChicken = (
  <>
    <MenuItem 
      name={"2pcs Fried Chicken Set"} 
      price={"RM 10.00"}
      nutritionalInfo = {{calories: 540, protein: 31, carbs: 35, fat: 29}}
      imageSrc="./src/ayam goreng.png"
    />
    <MenuItem 
      name={"10pcs Fried Chicken Set"} 
      price={"RM 60.00"}
      nutritionalInfo = {{calories: 540, protein: 31, carbs: 35, fat: 29}}
      imageSrc="./src/aymgoreng.png"
    />
    <MenuItem 
      name={"6pcs Nugget"} 
      price={"RM 6.00"}
      nutritionalInfo = {{calories: 270, protein: 13, carbs: 16, fat: 16}}
      imageSrc="./src/nuggets.png"
    />
  </>
)

const desserts = (
  <>
    <MenuItem 
      name={"Sundae Cone"} 
      price={"RM 2.00"}
      nutritionalInfo = {{calories: 207, protein: 2, carbs: 33, fat: 6}}
      imageSrc="./src/sundae.png"
     />
    <MenuItem 
      name={"French Fries"} 
      price={"RM 5.00"}
      nutritionalInfo = {{calories: 355, protein: 7, carbs: 28, fat: 26}}
      imageSrc="./src/fries.png"
    />
    <MenuItem 
      name={"Apple Pie"} 
      price={"RM 3.00"}
      nutritionalInfo = {{calories: 270, protein: 1, carbs: 43, fat: 10}}
      imageSrc="./src/applepie.png"
    />
  </>
)

function NutritionalInfo({nutritionalInfo}){
  return (
    <div>
      <p>Calories: {nutritionalInfo.calories}kCal</p>
      <p>Protein: {nutritionalInfo.protein}g</p>
      <p>Carbs: {nutritionalInfo.carbs}g</p>
      <p>Fat: {nutritionalInfo.fat}g</p>
    </div>
  )
}

function App() {
  return (
    <>
      <header>
        <h1>Adrian&apos;s</h1>
        <img src="./src/logo1.png" alt="burger"/>
      </header>
      <div>
          <Category title={"Burgers"} foods= {burgers}/>
          <Category title={"Fried Chicken"} foods= {friedChicken}/>
          <Category title={"Desserts & Sides"} foods={desserts}/>
      </div>
    </>
  );
}

export default App
