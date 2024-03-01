const posts = [
    {
      type:'image',
      imageUrl:["",''],// use Carousel
      userInfo:{
        userName:"",
        userImage:""
      },
      location:"",
      comments:[], // use bottom sheet
      likes:12,
      postedAt:'',
      post_id:"",
      postDescription:""
    }
  ]
  {
    postMessage.map((e)=>{
      return e?.type == 'video' ? <></>:
      e?.type == "image" ? <></>:
      e?.type == 'ad' && <></>
    })
  }