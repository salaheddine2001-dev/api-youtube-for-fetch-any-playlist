const url="https://www.google.com/youtube/v3/playlistitems?part=snippet&playlistid=PLMTdZ61eBnyp1nMM8mGRzpwuu6FNxFy0D&maxResults=50&key=AlzaSyAaRjH-yWMxGLPBOvDdqkGjTn84-wqY--o";

fetch(url).then(response => {return response.json()}).then(data => {
document.getElementById("player").src="https://www.youtube.com/embed/"+data.items[0].snippet.resourceId.videoId+"?showinfo=0 ; rel=0 ;";
  getdata(data.items);
}).catch(error => {
  console.log(error);
})
function getdata(data){
  data.forEach(element =>{
  var title=element.snippet.title;
  var videoId=element.snippet.resourceId.videoId;
  var img=element.snippet.thumbnails.high.url;
  var desc=element.snippet.description;
  document.getElementById("content").innerHTML+=
  '<div class="shadow-lg p-3 mb-5 bg-white rounded" >'+
  '<div onclick="loadVidio(\''+videoId+'\')">'+title+'</div>'
  +"<div>"+desc.substring(0,100)+"</div>"+
  "<img src='"+img+"' width='50' >"
  +
  '</div>'
  ;
 
  });
}
function loadVidio(videoId){
 document.getElementById("player").src="https://www.youtube.com/embed/"+videoId+"?showinfo=0 ; rel=0 ;";
}