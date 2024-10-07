// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <main className={styles.main}>
//         <Image
//           className={styles.logo}
//           src="https://nextjs.org/icons/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol>
//           <li>
//             Get started by editing <code>app/page.js</code>.
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className={styles.ctas}>
//           <a
//             className={styles.primary}
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className={styles.logo}
//               src="https://nextjs.org/icons/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.secondary}
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className={styles.footer}>
//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="https://nextjs.org/icons/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


// app/page.js
"use client";
import './globals.css'; // Import global styles (if any)
import { FaHome, FaShoppingCart, FaUser, FaSearch, FaRegHeart } from 'react-icons/fa';
import Sidebar from './components/Sidebar'; // Adjust the import path as necessary
export default function Home() {
    return (
        <div>
            <header>
            
      <nav className="navbar">
        <div className="navbar-logo">
        <img src="/images/Group147.png" alt="Logo" className="logo" />

        </div>
        <div className="navbar-title">
          <h1 className="tlt">Logo</h1>
        </div>
        <div className="navbar-icons">
          <ul>
            <li><FaSearch /></li>
            <li><FaRegHeart/></li>
            <li><FaShoppingCart /></li>
            <li><FaUser /></li>
            <li ><select className="lan">
              <option>ENG</option>
              <option>KAN</option>
              <option>HIN</option>
              </select></li>
          </ul>
        </div>
      </nav>
            </header>
            <style jsx>{`
              `}</style>
  

            <main>
                <section id="hero" className="hero">
                    <h2>DISCOVER OUR PRODUCTS</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores</p>
                </section>
                
<hr/>
<div className="container">
  <h6 className="itscount">3426 items</h6>
  <select className="opt">
    <option>RECOMMENDED</option>
  </select>
</div>


<hr/>
<div>
      <Sidebar />
      {/* Other components and content */}
    </div>


<hr/>

                <section id="products" className="product-list">
                    {/* <h2>Featured Products</h2> */}
                    <div className="product product1">
                        <img src="/images/bag.jpg" alt="Product 1" />
                        <h3>Product 1</h3>
                        <p>Short description of Product 1.</p>
                        {/* <button>Add to Cart</button> */}
                    </div>
                    <div className="product product2">
                        <img src="/images/toy.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>Short description of Product 2.</p>
                        {/* <button>Add to Cart</button> */}
                    </div>
                    <div className="product product3">
                        <img src="/images/belt.jpg" alt="Product 2" />
                        <h3>Product 2</h3>
                        <p>Short description of Product 2.</p>
                        {/* <button>Add to Cart</button> */}
                    </div>
                    {/* Add more products as needed */}
                </section>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} E-commerce Site. All rights reserved.</p>
            </footer>
        </div>
        
    );
}
