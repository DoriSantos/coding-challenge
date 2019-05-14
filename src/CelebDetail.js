// import React from 'react'
// import { Link, Redirect } from 'react-router-dom'

// export default function CelebDetail(props) {
//     function getCelebFromKnowFor(know_for) {
//         return celebrities.find(c => c.know_for === know_for)
//     }
//     let know_for = props.match.params.know_for
//     let celebrity = getCelebFromKnowFor(know_for)
//     if (!celebrity) {
//         return <Redirect to="/" />
//     }
//     return (
//         <div>
//           <table className="table">
//             <thead></thead>
//             <tbody>
//               <tr>
//                 <td><img src={"https://image.tmdb.org/t/p/w185"+celebrity.profile_path} alt=""/></td>
//                 <td>{celebrity.name}</td>
//               </tr>
//               <tr>
//                 <td>Know for:</td>
//                 <td>
//                   <ul>
//                     {this.state.celebrities.know_for.map(celebrity => <li key={know_for}>
//                       <Link to={"/"+know_for}>
//                         {getCelebFromKnowFor(know_for).name+<img src={"https://image.tmdb.org/t/p/w185"+celebrity.poster_path} alt=""/>}
//                       </Link>
//                     </li>)}
//                   </ul>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )
// }