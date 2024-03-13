var li = document.getElementsByTagName("li");


function checkconsonant(str){
    let x = str.length;
    let temp = x -1;
    flag = 0
    vowel = 0
    consonant = 0
    
    for(i=0; i<x ;i++){
        if(str[i] =='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            vowel+=1;
        }else{
            consonant+=1;
        }
    }


    li[1].textContent = "Number of vowels: "+ vowel

    li[2].textContent = "Number of consonants: "+ consonant



}


function word(){
    var str = document.getElementById("firstfunc").value;
    li[0].textContent = str;
    
    checkconsonant(str)

    
}


li[3].textContent = "Check Palindrome"

function checkpalindrome (palin){
    let x = palin.length;
    let temp = x -1;
    flag = 0
    
    for(i=0; i<x/2;i++){
        
        if(palin[i] != palin[temp]){
            flag=1
        }
        temp-=1
    }

    if(flag == 0){
        return true;
    }else{
        return false;
    }

}


function palindrome(){
    var palin = document.getElementById("secondfunc").value;
    li[4].textContent = palin;
    
    let check = checkpalindrome(palin)

    if(check == true){
        li[5].textContent = "Yes it is a palindrome"
    }else{
        li[5].textContent = "No it is not a palindrome"
    }
}




function total(){
    let subtotal = document.getElementById("thirdfunc").value;
    let rates = document.querySelector('input[name="tip"]:checked').value;
    let dec = Number.parseFloat(rates)/100

    let total = Number.parseFloat(subtotal) + dec
    console.log(Number.parseFloat(subtotal) + dec)
    li[6].textContent = "Your subtotal is $"+subtotal
    li[7].textContent = "You chose to tip "+rates+"%"
    li[8].textContent = "Your total is $"+total


}