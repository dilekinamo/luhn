function kontrolEt(){
    let status=0;
    let tekButun=0;
    let ciftButun=0;
    let number = document.getElementById("inputNumber").value;
    let uzunluk = number.length;
    console.log(number+" "+uzunluk);

    // Her hane rakam mi?
    for(let i=0;i<uzunluk;i++){
        if(isNumber(number[i])==false){
            status=1;
            break;
        }
    }

    if(status==0){
        // Tekler
        for(let i=uzunluk-1;i>=0;i-=2){
            tekButun+=parseInt(number[i]);
            console.log(parseInt(tekButun));
        }


        // Ciftler
        let temp;
        for(let i=uzunluk-2;i>=0;i-=2){
            temp=0;
            if((2*number[i])>9){
                temp=(2*number[i])-9;
            }else{
                temp=2*number[i];
            }
            ciftButun+=temp;
            console.log(parseInt(ciftButun));
        }

        // kontrol
        if( (parseInt((tekButun)+parseInt(ciftButun))%10)==0 ){
            console.log("if "+parseInt(tekButun)+parseInt(ciftButun)%10);
            status=2; 
        }else{
            console.log("else "+parseInt(tekButun)+parseInt(ciftButun)%10);
            status=3; 
        }
    }

    // güncelle
    if(status==1){
        guncelleHataliRakam();
    }
    if(status==2){
        guncelleNumaraDogru();
    }
    if(status==3){
        guncelleNumaraHatali()
    }
}

function isNumber(number){
    for(let i=0;i<10;i++){
        if(number==i){
            console.log(number+ " "+i);
            return true;
        }
    }
    return false;
}

function guncelleHataliRakam(){
    document.getElementById("sonucKutu").innerText="Sadece rakam girin";
    document.getElementById("sonucKutu").style.backgroundColor="red";
    document.getElementById("sonucKutu").style.fontSize="x-large";
    document.getElementById("anaKutu").style.borderColor="red";
    document.getElementById("anaKutu").style.borderStyle="solid";
    document.getElementById("sonucKutu").style.fontWeight="bold";
    document.getElementById("sonucKutu").style.color="white";
}

function guncelleNumaraDogru(){
    document.getElementById("sonucKutu").innerText="Kredi karti numarasi dogru";
    document.getElementById("sonucKutu").style.backgroundColor="green";
    document.getElementById("sonucKutu").style.fontSize="x-large";
    document.getElementById("anaKutu").style.borderColor="green";
    document.getElementById("anaKutu").style.borderStyle="solid";
    document.getElementById("sonucKutu").style.fontWeight="bold";
    document.getElementById("sonucKutu").style.color="white";
}

function guncelleNumaraHatali(){
    document.getElementById("sonucKutu").innerText="Kredi karti numarasi hatali";
    document.getElementById("sonucKutu").style.backgroundColor="red";
    document.getElementById("sonucKutu").style.fontSize="x-large";
    document.getElementById("anaKutu").style.borderColor="red";
    document.getElementById("anaKutu").style.borderStyle="solid";
    document.getElementById("sonucKutu").style.fontWeight="bold";
    document.getElementById("sonucKutu").style.color="white";
}