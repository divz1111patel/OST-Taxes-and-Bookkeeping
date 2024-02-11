// //   <div className="how-to-file-full" id="howtofile">
// //     <div className="how-to-file">
// //       <div className="refund-section">
// //         <h3 className="">​Calculate your refund?</h3>
// //         <input type="number" placeholder="Earnings in 2023?" />
// //         <input type="number" placeholder="Tax paid in 2023?" />
// //         <button type="submit"> Refund? </button>
// //       </div>
// //       <div className="how_to">
// //         <h1 className="how-to-heading">Taxes <span className="underline">without</span> all the lingo <span className="bullshit">blahblahblahblah</span></h1>
// //         <div className="how_to_lower">
// //           <div className="how_to_lower_check">
// //             <img src={Checkmark} />
// //             <h3 className="">​FREE if you do not get a refund</h3>
// //           </div>
// //           <div className="how_to_lower_check">
// //             <img src={Checkmark} />
// //             <h3 className="">Guided text messaging</h3>
// //           </div>
// //           <div className="how_to_lower_check">
// //             <img src={Checkmark} />
// //             <h3 className="">Niagara and Brock students get priority treatment</h3>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="deductions">
// //       <h1 className="deduction-heading">Student <span className="underline">deductions</span> for Niagara and Brock students <span className="bullshit">aalllllldayyyy</span></h1>
// //       <div className="how_to_lower_check">
// //         <img src={Checkmark} />
// //         <h3 className="">​FREE if you do not get a refund</h3>
// //       </div>
// //       <div className="how_to_lower_check">
// //         <img src={Checkmark} />
// //         <h3 className="">Guided text messaging</h3>
// //       </div>
// //       <div className="how_to_lower_check">
// //         <img src={Checkmark} />
// //         <h3 className="">Niagara and Brock students promotion</h3>
// //       </div>
// //     </div>
// //     <div className="all-companies">
// //       <div className="companies">
// //         <img src={gbm} />
// //         <img src={gn} />
// //         <img src={tl} />
// //         <img src={fsv} />
// //         <img src={yf} />
// //         <img src={tor} />
// //       </div>
// //       <div className="companies">
// //         <img src={gbm} />
// //         <img src={gn} />
// //         <img src={tl} />
// //         <img src={fsv} />
// //         <img src={yf} />
// //         <img src={tor} />
// //       </div>
// //       <div className="companies">
// //         <img src={gbm} />
// //         <img src={gn} />
// //         <img src={tl} />
// //         <img src={fsv} />
// //         <img src={yf} />
// //         <img src={tor} />
// //       </div>
// //     </div>
// //   </div>
// // );


// .how-to-file-full {
//     display: flex;
//     flex-direction: column;
//     background-color: #ffe4d5;
//     padding: 50px 25px 25px 25px;
// }

// .how-to-file {
//     display: flex;
//     flex-direction: row;
//     height: max-content;
//     align-items: center;
//     justify-content: space-evenly;
// }

// .refund-section {
//     display: flex;
//     flex-direction: column;
//     border-radius: 25px;
//     background-color:RGBA(20, 20, 20, 0.95);
//     padding: 25px 15px;
//     box-shadow: 0 0 15px rgba(0, 0, 0, 1.0);
//     align-items: center;
//     order:1;
// }

// .refund-section h3 {
//     padding: 25px 10px 10px 10px;
//     font-family: var(--font-family);
//     font-size: 20px;
//     color: #F1B9FF;
// }

// .refund-section input{
//     padding: 10px;
//     margin-top: 10px;
//     border: 3ch solid 0,0,0;
//     border-radius: 20px;
//     box-shadow: 0 0 5px rgba(0, 0, 0, 1.0);
//     width: 80%;
//     text-align: center;
// }

// .refund-section button{
//     width: 90%;
//     margin: 35px 0px 25px 0;
//     padding: .75rem;
//     background-color: var(--button);
//     color: white;
//     font-weight: 600;
//     font-size: 18px;
//     border: none;
//     border-radius: 20px;
//     cursor: pointer;
// }

// .how_to{
//     display: flex;
//     flex-direction: column;
//     order:2
// }

// .how-to-heading {
//     font-size: 32px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     color: RGB(47, 46, 46);
//     width: 400px;
//     font-weight: 800;
//     letter-spacing: -0.04rem;
//     line-height: 35px;
//     text-align: center;
// }

// .how_to_lower{
//     margin-top: 25px;
// }

// .how_to_lower_check{
//     display: flex;
// }

// .how_to h3{
//     font-size: 18px;
//     font-family: var(--font-family);
//     width: 400px;
//     line-height: 18px;
//     font-weight: 1000;
//     padding: 10px 0;
//     margin-left: 20px;
//     color: RGB(47, 46, 46);
// }

// .all-companies {
//     display: flex;
// }

// .companies {
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     padding: 25px;
//     margin-top: 25px;
//     order: 3;
//     animation: 25s slide infinite linear;
// }

// .companies img {
//     height: 60px;
//     padding-left: 50px;
// }

// .underline {
//     position: relative;
// }

// .underline::after {
//     content: "";
//     position: absolute;
//     bottom: -13px;
//     left: 0;
//     width: 100%;
//     height: 1em;
//     background: url(../../assets/fancy-underline.png) no-repeat;
//     display: inline-block;
// }

// .bullshit::after {
//     width: fit-content;
//     padding: 8px;
//     background-color: rgb(47, 46, 46);
//     color: rgb(249, 246, 232);
//     line-height: 1;
//     font-weight: normal;
//     content: "bullshit";
//     position: absolute;
//     left: 50%;
//     transform: translate(175%) rotate(-10deg);
//     font-size: 0.85em;
// }

// .deductions {
//     display: flex;
//     flex-direction: column;
// }

// .deduction-heading {
//     font-size: 32px;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
//     color: RGB(47, 46, 46);
//     width: 400px;
//     font-weight: 800;
//     letter-spacing: -0.04rem;
//     line-height: 35px;
//     text-align: center;
// }