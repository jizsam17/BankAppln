
    class Bank{

        static getAccountDetails=()=>{
            var accountDetails={
                userone:{acno:1000,balance:10000,username:"userone",password:"testuser"},
            
                usertwo:{acno:1001,balance:1000,username:"usertwo",password:"testuser2"},
            
                userthree:{acno:1002,balance:1500,username:"userthree",password:"testuser3"}
            
            }

            return accountDetails;

        }


        static authenticateUser=(uname,pwd)=>{
            alert("authenticate");

            let dataset=Bank.getAccountDetails();

            if(uname in dataset){
                if(pwd===dataset[uname].password){
                    
                    return 1;
                }
                else{
                    return 0;
                    
                }
            }
            else{
                 return -1;
            }

        }
        static login=()=>{
            let username=document.querySelector("#username").value;
            let password=document.querySelector("#password").value;
            alert("login");
            let res= Bank.authenticateUser(username,password);
            
            if(res==1){

                alert("Successful Login");
                window.location.href="bankpg1.html";
            }

            else if(res==0){
                alert("Invalid password");

            }
            else if(res==-1){
                
                alert("Invalid username");

            }
        }

        static deposit=()=>{

            let username=document.querySelector("#uname").value;
            let password=document.querySelector("#pwd").value;
            let amt=Number(document.querySelector("#amt").value);

            let dataset=Bank.getAccountDetails();

            if(username in dataset){
                if(password===dataset[username].password){
                    dataset[username].balance+=amt;
                    alert("ur account had been credited. avail bal is "+dataset[username].balance);
                    
                }
            }

        }

        static withdraw=()=>{

            let username=document.querySelector("#uname").value;
            let password=document.querySelector("#pwd").value;
            let amt=Number(document.querySelector("#amt").value);

            let dataset=Bank.getAccountDetails();

            if(username in dataset){
                if(password===dataset[username].password){
                    if(dataset[username].balance>amt){
                        dataset[username].balance-=amt;
                    alert("ur account had been debited. avail bal is "+dataset[username].balance);
                    }
                    else{ alert("not enough balance");}
                    
                }
            }

        }

        
    }


    
    