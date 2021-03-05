// /.netlify/functions/like
let firebase = require('./firebase')

exports.handler = async function(event) {
  let db = firebase.firestore()

  console.log(event.body)
  let post = JSON.parse(event.body)
  let post.postId
  let post.userId

  console.log(`the post is ${postId}`)
  console.log(`the post is ${userId}`)
  // 🔥🔥🔥 Code-Along
  // Implement the like function
  // Step 3
  let querySnapshot = await db.collection('likes').where('postID', '==', postId).where('userId', '==', userId)
  let numberOfLikes = querySnapshot.size
  console.log(`number of likes: ${numberOfLikes}`)

  //Step 4
  if (numberOfLikes == 0){
    await db.collection('likes').add({
      postId: postId,
      userId: userId
    }) 
     //STep 5
    return {
      statusCode: 200,
      body: JSON.stringify({success: true})
    } 
  } else {
      return {
        statusCode: 200,
        body: JSON.stringify({success: false, error: 'user has already liked the post'})
    }
  }

}