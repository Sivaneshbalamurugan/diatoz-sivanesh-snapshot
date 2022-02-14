import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    apiData=[{
    "id": "51877549700",
    "owner": "45480097@N05",
    "secret": "074ef25bf2",
    "server": "65535",
    "farm": 66,
    "title": "Praia do Peró",
    "ispublic": 1,
    "isfriend": 0,
    "isfamily": 0
    }];
    constructor(private router: Router,private http:HttpClient) { }
    ngOnInit() {      
        this.checkToken();
    }
    
    checkToken(){
        var uname= localStorage.getItem("email") 
        var psw=localStorage.getItem("password")
        if(uname && psw && uname !="" && psw !=""){

        } else {
            this.router.navigateByUrl('')
        }
    }
    search(tag:any){
        this.http.get<any>('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags='+tag+'&per_page=24&format=json&nojsoncallback=1`').subscribe(data => {
        console.log(data);
        this.apiData=data.photos.photo;
        // if(data.photos && data.photos.photo.length){
        //     var photos=data.photos.photo;
        //     for(var i=0;i<photos.length;i++){
        //       this.apiData.push({image:"https://farm"+photos[i].farm+".staticflickr.com/"+photos[i].server+"/"+photos[i].id+"_"+photos[i].secret+"_m.jpg"})  
        //     }
        // } 
        })
    }
}