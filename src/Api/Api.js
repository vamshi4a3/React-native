export default class Api {
    getAppData(country,lng, content) {
        const promises = [
            this._getVOD(country,lng,content)
        ];
        return Promise.all(promises);
    }
    _getAds(a){
        return fetch('https://b2bapi.zee5.com/adtags/adds.php?content_id='+a+'&platform_name=roku_app&usertype=guest&country=IN', {
            method: 'GET',          
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });

    }
    _getVOD(country,display, content) {
        this.acesstoken=localStorage.getItem('accessToken')
        return fetch('https://gwapi.zee5.com/content/collection/0-8-homepage?version=6&page=1&limit=5&item_limit=20&country='+country+'&translation=' + display + '&languages=' + content, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
                //console.log(data)
                return { ref: "Grid", data };
            }).catch(error => {
                console.log(error)
            });
    }

    _getLogin(email,password) {
        this.acesstoken=localStorage.getItem('accessToken')
        
        //"https://userapi.zee5.com/v1/user/loginemail"+ email + "&password=" + password
        return fetch("https://userapi.zee5.com/v1/user/loginemail" + "?email=" + email + "&password=" + password , {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        }
        )
            .then((response) => {
                return response.json();o
            }).then((data) => {
                //console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }
    _getMobileLogin(mobile,password) {
        this.acesstoken=localStorage.getItem('accessToken')
        //"https://userapi.zee5.com/v1/user/loginemail"+ email + "&password=" + password
        return fetch( "https://userapi.zee5.com/v1/user/loginmobile?mobile="+ mobile +"&password=" + password, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        }
        )
            .then((response) => {
                return response.json();o
            }).then((data) => {
                //console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }

    _getloadProfile(token) {
   /// let token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJuYmYiOjE1OTE5Mzg2NjQsImV4cCI6MTYyMzQ3NDg2NiwiaXNzIjoiaHR0cHM6XC9cL3VzZXJhcGkuemVlNS5jb20iLCJhdWQiOlsiaHR0cHM6XC9cL3VzZXJhcGkuemVlNS5jb21cL3Jlc291cmNlcyIsInN1YnNjcmlwdGlvbmFwaSIsInVzZXJhcGkiXSwiY2xpZW50X2lkIjoicmVmcmVzaF90b2tlbl9jbGllbnQiLCJzdWIiOiJlYjljZDQ4MC02MTU2LTRiZjctOTU5NS0xN2M0N2NjMTRkYzIiLCJhdXRoX3RpbWUiOjE1OTE5Mzg2NjMsImlkcCI6ImxvY2FsIiwidXNlcl9pZCI6ImViOWNkNDgwLTYxNTYtNGJmNy05NTk1LTE3YzQ3Y2MxNGRjMiIsInN5c3RlbSI6Ilo1IiwiYWN0aXZhdGlvbl9kYXRlIjoiMjAyMC0wMS0xM1QxMzo1OTo0OSIsImNyZWF0ZWRfZGF0ZSI6IjIwMjAtMDEtMTNUMTM6NTk6NDkiLCJyZWdpc3RyYXRpb25fY291bnRyeSI6IklOIiwidXNlcl9lbWFpbCI6InBycDJAbWFpbG5lc2lhLmNvbSIsInVzZXJfbW9iaWxlIjoiOTE3OTA4OTk0OTEzIiwic3Vic2NyaXB0aW9ucyI6Ilt7XCJpZFwiOlwiYzEzYzZjZDctN2QzZS00ZjZjLWJmOWUtMjIwNWZkMzEwY2VmXCIsXCJ1c2VyX2lkXCI6XCJlYjljZDQ4MC02MTU2LTRiZjctOTU5NS0xN2M0N2NjMTRkYzJcIixcImlkZW50aWZpZXJcIjpcIkNSTVwiLFwic3Vic2NyaXB0aW9uX3BsYW5cIjp7XCJpZFwiOlwiMC0xMS02MzhcIixcImFzc2V0X3R5cGVcIjoxMSxcInN1YnNjcmlwdGlvbl9wbGFuX3R5cGVcIjpcIlNWT0RcIixcInRpdGxlXCI6XCJBbGwgQWNjZXNzIFBhY2tcIixcIm9yaWdpbmFsX3RpdGxlXCI6XCJBbGwgQWNjZXNzIFBhY2tcIixcInN5c3RlbVwiOlwiWjVcIixcImRlc2NyaXB0aW9uXCI6XCJBbGwgQWNjZXNzIC0gNiBtdGhzXCIsXCJiaWxsaW5nX2N5Y2xlX3R5cGVcIjpcImRheXNcIixcImJpbGxpbmdfZnJlcXVlbmN5XCI6MTgwLFwicHJpY2VcIjo1OTkuMCxcInByaWNlc1wiOltdLFwiY3VycmVuY3lcIjpcIklOUlwiLFwiY291bnRyeVwiOlwiSU5cIixcImNvdW50cmllc1wiOltcIklOXCJdLFwic3RhcnRcIjpcIjIwMTgtMTAtMzFUMDA6MDA6MDBaXCIsXCJlbmRcIjpcIjIwMjItMDMtMzFUMjM6NTk6NTlaXCIsXCJvbmx5X2F2YWlsYWJsZV93aXRoX3Byb21vdGlvblwiOnRydWUsXCJyZWN1cnJpbmdcIjpmYWxzZSxcInBheW1lbnRfcHJvdmlkZXJzXCI6W3tcIm5hbWVcIjpcIlBheXRtUVJVUElcIn0se1wibmFtZVwiOlwiUGF5VVwifSx7XCJuYW1lXCI6XCJKdXNQYXlcIn0se1wibmFtZVwiOlwiUXdpa2NpbHZlclwifSx7XCJuYW1lXCI6XCJHb29nbGVcIixcInByb2R1Y3RfcmVmZXJlbmNlXCI6XCJ6ZWU1XzZtX3N2b2RfbnJfaW5cIn0se1wibmFtZVwiOlwiTW9iaWt3aWtcIn0se1wibmFtZVwiOlwiUGF5VE1cIn0se1wibmFtZVwiOlwiQW1hem9uSUFQXCIsXCJwcm9kdWN0X3JlZmVyZW5jZVwiOlwiemVlNV9hbGxfYWNjZXNzX3BhY2tfaW5fNm1cIn0se1wibmFtZVwiOlwiQW1hem9ucGF5X25ld1wifSx7XCJuYW1lXCI6XCJCaWxsRGVza1wifSx7XCJuYW1lXCI6XCJQYXl0bVFSXCJ9XSxcInByb21vdGlvbnNcIjpbXSxcImFzc2V0X3R5cGVzXCI6WzYsMCw5XSxcImFzc2V0X2lkc1wiOltdLFwibnVtYmVyX29mX3N1cHBvcnRlZF9kZXZpY2VzXCI6NSxcIm1vdmllX2F1ZGlvX2xhbmd1YWdlc1wiOltdLFwidHZfc2hvd19hdWRpb19sYW5ndWFnZXNcIjpbXSxcImNoYW5uZWxfYXVkaW9fbGFuZ3VhZ2VzXCI6W10sXCJ2YWxpZF9mb3JfYWxsX2NvdW50cmllc1wiOnRydWV9LFwic3Vic2NyaXB0aW9uX3N0YXJ0XCI6XCIyMDIwLTAxLTEzVDE0OjA0OjMzLjEyWlwiLFwic3Vic2NyaXB0aW9uX2VuZFwiOlwiMjAyMC0wNy0xMlQyMzo1OTo1OVpcIixcInN0YXRlXCI6XCJhY3RpdmF0ZWRcIixcInJlY3VycmluZ19lbmFibGVkXCI6ZmFsc2UsXCJwYXltZW50X3Byb3ZpZGVyXCI6XCJjcm1cIixcImZyZWVfdHJpYWxcIjpudWxsLFwiY3JlYXRlX2RhdGVcIjpcIjIwMjAtMDEtMTNUMTQ6MDQ6MzMuMTJaXCIsXCJpcF9hZGRyZXNzXCI6XCIxNC4xNDEuMjQuMTU4XCIsXCJyZWdpb25cIjpcIlRlbGFuZ2FuYVwiLFwiYWRkaXRpb25hbFwiOntcImFtb3VudFwiOlwiNDc5LjAwXCIsXCJwYXltZW50X3R4bl9pZFwiOlwiOTY2ODUxODA2M1wiLFwicGF5bWVudG1vZGVcIjpcIlBheVVcIixcInRyYW5zYWN0aW9uX2lkXCI6XCI3MTU0OTU5X05yakhBU3NxN08yWlhtdUxcIixcInByb21vX2NvZGVcIjpcInplZTVrb2Rha1wiLFwiZGlzY291bnRfYW1vdW50XCI6XCIxMjAuMDAwMFwiLFwiZnJlZV90cmlhbFwiOm51bGwsXCJvcmlnaW5hbF91c2VyX2FnZW50XCI6XCJNb3ppbGxhXC81LjAjKFdpbmRvd3MjTlQjMTAuMDsjV2luNjQ7I3g2NCkjQXBwbGVXZWJLaXRcLzUzNy4zNiMoS0hUTUwsI2xpa2UjR2Vja28pI0Nocm9tZVwvNzkuMC4zOTQ1Ljg4I1NhZmFyaVwvNTM3LjM2XCIsXCJyZWN1cnJpbmdfZW5hYmxlZFwiOmZhbHNlLFwic3Vic2NyaXB0aW9uX3R5cGVcIjpcIlNVQlNDUklQVElPTlwifSxcImFsbG93ZWRfYmlsbGluZ19jeWNsZXNcIjowLFwidXNlZF9iaWxsaW5nX2N5Y2xlc1wiOjB9XSIsInNjb3BlIjpbInN1YnNjcmlwdGlvbmFwaSIsInVzZXJhcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiZGVsZWdhdGlvbiJdfQ.O8BBoBSehCTEKKUe_MYGvrIlsn0OtW0pMOxo1E3f0RdAfb1ayf1BEk1VV6pnekaJErdoTPKzonYpcJOvvgQXD-D743ZazqrJXnGzw52Xdlj_rD5sgB4kptoUvCHYgOqMjOIpK92t7hsF_wlOOS7SfSwjkcZVWIAEhYrAAWIaV3PEE7jY8RKNJejuZ888U9bO746uC7YPHTSS9XVPbsXxE7tJpMmWmx9QFn6s9t4e3feUvKb2SkqNvZ6EN3TlpEWCBLrVxTFGLetBLO-ND87i_OHVYJ6gFB7BdBijhCrjQBoT0zFESVHQwapl9z2jaBesU4q5GZu3wX4VoQ_AGUXVIQ'
         
        return fetch( "https://userapi.zee5.com/v1/user"
            , {
            method: 'GET',
            headers: {                          
                'Authorization':"bearer "+token
            }
         }
        )
            .then((response) => {
                
                return response.json();
            }).then((data) => {

                console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }


    //https://userapi.zee5.com/v1/settings
    //for registration
    //https://b2bapi.zee5.com/partner/api/silentregister.php
  
    //"https://userapi.zee5.com/v1/user/loginmobile?mobile="+ mobile +"&password=" + password

    _getSetting(token) {
        this.acesstoken=localStorage.getItem('accessToken')
        //"https://userapi.zee5.com/v1/user/loginemail"+ email + "&password=" + password
       //"https://userapi.zee5.com/v1/user"
        return fetch( //"https://userapi.zee5.com/v1/settings"
        "https://userapi.zee5.com/v1/user"
            , {
            method: 'GET',
            headers: {
                
                'X-ACCESS-TOKEN': this.acesstoken,
                'Authorization': 'bearer '+token,
            }
        }
        )
            .then((response) => {
                return response.json();o
            }).then((data) => {
                //console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }


    _getRegister(params) {
        
    
        //let params={type:"email",value:"vk76690@gmail.com",fname :"Nagendra",lname :"Verma",partner_key :"zee5",password :"Krish@143",country:"IN",guest_token:"",version_number:"1.0.0",sourceapp:"com.routes.zee5",first_time_login :"1" }
       
        return fetch("https://b2bapi.zee5.com/partner/api/silentregister.php"
            , {
            method: 'POST',
            headers: {
                
                //'X-ACCESS-TOKEN': 'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJyb2t1QHBwQDEyMyIsImlzc3VlZEF0IjoiMjAyMC0wNi0xMlQwNTowMDoyMCswMDAwIiwidHRsIjo4NjQwMH0.99YtpVTrPh4vGna4a-TawuqAu1No5nOtBsDyVY2H63s',
                //'Authorization': 'bearer '+token,
                "Content-Type":"application/json;charrset=utf-8"
            },
            body: JSON.stringify(params)

        }
        )
            .then((response) => {

                return response.json();o
            }).then((data) => {
                console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }

    _getEntitlement(params){
        return fetch("https://subscriptionapi.zee5.com/v4/entitlement"
            ,{
              method: 'POST',
              headers: {
                 "Content-Type": "application/json;charrset=utf-8"
             },
             body: JSON.stringify(params)
         }
     )
         .then((response) => {
             return response.json();
         }).then((data) => {
             // console.log(data)
            return data
         }).catch(error => {
             console.log(error)
         });      
     }

    //https://subscriptionapi.zee5.com/v1/device

    _deleteDevice(token,gtoken) {
        this.acesstoken=localStorage.getItem('accessToken')
        return fetch("https://subscriptionapi.zee5.com/v1/device"
            , {
            method: 'DELETE',
            headers: {  
                'X-ACCESS-TOKEN': this.acesstoken,
                'Authorization': 'bearer '+token,
                //"Content-Type":"application/json;charrset=utf-8"
            },
        })
            .then((response) => {

                return response.json();
            }).then((data) => {
                if(data.code==0){
                    this._AddDevice(token,gtoken)
                }
                
                console.log(data)
                return data
            }).catch(error => {
                console.log(error)
            });
    }

    
    _AddDevice(token,gtoken){        
        fetch("https://subscriptionapi.zee5.com/v1/device"
        , {
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charrset=utf-8",
                "Authorization":"bearer " +token
            },
            body: JSON.stringify( {name :"roku",identifier: gtoken })
        }
    )
        .then((response) => {
 
            return response.json();
        }).then((data) => {

            if(data.code==0){
                console.log('king')
               this._getEntitlement(token,gtoken)

            }
            if(data.code==3602){
               console.log('delete device')
                this._deleteDevice(token,gtoken)
            }
            
            console.log(data)
            return data
        }).catch(error => {
            console.log(error)
        });

    }

    _getGuestToken(params,token) {
        params={user:{apikey: "6BAE650FFC9A3CAA61CE54D", aid : "91955485578"}}
       return fetch("https://useraction.zee5.com/user/"
           , {
           method: 'POST',
           headers: {
               
               //'X-ACCESS-TOKEN': 'eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9kdWN0X2NvZGUiOiJ6ZWU1QDk3NSIsInBsYXRmb3JtX2NvZGUiOiJyb2t1QHBwQDEyMyIsImlzc3VlZEF0IjoiMjAyMC0wNi0xMlQwNTowMDoyMCswMDAwIiwidHRsIjo4NjQwMH0.99YtpVTrPh4vGna4a-TawuqAu1No5nOtBsDyVY2H63s',
               'Authorization': 'bearer '+token,
               "Content-Type":"application/json;charrset=utf-8"
           },
           body: JSON.stringify(params)
       }
       )
           .then((response) => {

               return response.json();
           }).then((data) => {
               console.log(data)
               return data
           }).catch(error => {
               console.log(error)
           });
   }


    _getNonAesToken() {
        return fetch('https://useraction.zee5.com/tokennd/')
            .then((response) => {
                return response.json();

            }).then((data) => {
                return data;
            }).catch(error => {
                console.log(error)
            });
    }

    
    _getAcessToken() {
        return fetch('https://useraction.zee5.com/token/platform_tokens.php?platform_name=roku_app')
            .then((response) => {
                return response.json();

            }).then((data) => {
                console.log(data)
                return data;
                
            }).catch(error => {
                console.log(error)
            });
    }

    _getCountry() {
        return fetch('https://xtra.zee5.com/country')
            .then((response) => {
                return response.json();

            }).then((data) => {
                return data;
            }).catch(error => {
                console.log(error)
            });
    }

    _LiveToken() {
        return fetch('https://useraction.zee5.com/token/live.php')
            .then((response) => {
                return response.json();

            }).then((data) => {
                return data;
            }).catch(error => {
                console.log(error)
            });
    
        }



    _subscriptionPlans(country) {
        console.log('king kong'+country)
        return fetch('https://subscriptionapi.zee5.com/v1/subscriptionplan?country='+country+'&translation=en&system=Z5&version=7')
            .then((response) => {
                return response.json()
            }).then((data) => {
                // console.log(data)
                return data
            });
    }

    _getDomain(country) {
        return fetch('https://b2bapi.zee5.com/front/countrylist.php?lang=te&ccode='+country+'&version=1.1')

            .then((response) => {
                return response.json();

            }).then((data) => {
                //console.log(data)
                return data;
            }).catch(error => {
                console.log(error)
            });
    }

    getSearch(query, page) {

        
       
        return fetch("https://gwapi.zee5.com/content/getContent/search?q="+query+"&start=0&limit=24&asset_type=0,6,1,9,9,101&country=IN&languages=en,te&translation=en&version=5&page="+page)

            .then((response) => {
                return response.json();

            }).then((data) => {
                //console.log(data)
                return data;
            }).catch(error => {
                console.log(error)
            });
    }


    _getMenuData(id, page, display, content) {
        this.acesstoken=localStorage.getItem('accessToken')
        let country=sessionStorage.getItem('country')
        return fetch('https://gwapi.zee5.com/content/collection/' + id + '?version=8&page=' + page + '&limit=24&item_limit=20&country='+country+'&translation=' + display + '&languages=' + content, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        }
        )
            .then((response) => {
                return response.json()
            }).then((data) => {
               console.log(this.acesstoken)
                return data
            });
    }


    _extradetails(id, page, display, content) {
        this.acesstoken=localStorage.getItem('accessToken')
        let country=sessionStorage.getItem('country')
        return fetch("https://gwapi.zee5.com/content/collection/"+id+"?page="+page+"&limit=24&item_limit=20&country="+country+"&translation="+display+"&languages="+content+"&version=8", {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        }
        )
            .then((response) => {
                return response.json()
            }).then((data) => {

                return data
            });
    }

    _NewsData(id) {
        this.acesstoken=localStorage.getItem('accessToken')
        let country=sessionStorage.getItem('country')
        return fetch('https://catalogapi.zee5.com/v1/channel/' + id + '?translation=en&country='+country, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        }
        )
            .then((response) => {
                return response.json()
            }).then((data) => {

                return data
            });
    }

    async _movieDetails(assetId) {
        this.acesstoken=localStorage.getItem('accessToken')
        let country=sessionStorage.getItem('country')
        return fetch('https://gwapi.zee5.com/content/details/' + assetId + '?translation=en&country='+country, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data)
                return data;
            });
    }


    _getSaveProfile(token,changes) {
        return fetch( "https://userapi.zee5.com/v1/user"
         , {
            method: 'PUT',    
            body: JSON.stringify(changes),
            headers: {           
                "Content-Type": "application/json" ,             
                'Authorization': 'bearer '+token,
            }
          }
         )
        .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
                
               
            }).catch(error => {
                console.log(error)
            });
    }


    _checkSubscription(token) {
        return fetch( "https://subscriptionapi.zee5.com/v1/subscription?include_all=false"
         , {
            method: 'GET',    
    
            headers: {           
                "Content-Type": "application/json" ,             
                'Authorization': 'bearer '+token,
            }
          }
         )
        .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
                
               
            }).catch(error => {
                console.log(error)
            });
    
        }


    async _SerialDetails(seasonId, assetid, limit) {
        this.acesstoken=localStorage.getItem('accessToken')
        let country=sessionStorage.getItem('country')
        return fetch("https://gwapi.zee5.com/content/season/next_previous/" + seasonId + "?episode_id=" + assetid + "&type=next&limit=" + limit + "&page=1&translation=en&country="+country, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
                return data;
            });

        }

        async _tvShowDetails(assetId) {
            this.acesstoken=localStorage.getItem('accessToken')
            let country=sessionStorage.getItem('country')
        return fetch('https://gwapi.zee5.com/content/tvshow/' + assetId + '?translation=en&country='+country, {
            method: 'GET',
            headers: {
                'X-ACCESS-TOKEN': this.acesstoken
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
                // console.log(data)
                return data;
            });
    }
}

//enttilement server
//"https://subscriptionapi.zee5.com/v4/entitlement"



// async_init(){
// letparams={type:"email",value:"vk76600@gmail.com",fname :"Nagendra",lname :"Verma",partner_key :"zee5",password :"Krish@143",country:"IN",guest_token:"",version_number:"1.0.0",sourceapp:"com.routes.zee5",first_time_login :"1" } 
// letresp=awaitthis._getCountry(params)
// console.log(resp)
//    }
// _getCountry(options) {
// returnfetch('https://b2bapi.zee5.com/partner/api/silentregister.php',{
// method:'post',
// body:JSON.stringify(options)
//           })
//             .then((response) => {
// returnresponse.json();
//             }).then((data) => {
// returndata;
//             }).catch(error=> {
// console.log(error)
//             });
//     }


