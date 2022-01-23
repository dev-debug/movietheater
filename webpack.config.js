module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}

///////////////////////////////////
// module.exports = {
//   mode: "development",
//   /* your paths and other configs */
//   module: {
//     rules: [
//       /* loaders */
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               name: "[path]/[name].[ext]",
//             },
//           },
//         ],
//       },
//     ],
//   },
// };

//////////////////////////////////////

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192
//             }
//           }
//         ]
//       }
//     ]
//   }
// }
