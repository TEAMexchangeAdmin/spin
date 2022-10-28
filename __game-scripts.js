var LabaManager=pc.createScript("labaManager");function getRandomArray(t,i,e){for(var s=[e],n=0;n<e;n++){var o,h=0;do{o=!1,h=getRandom(t,i),-1!=s.indexOf(h)&&(o=!0)}while(o);s[n]=h}return s}function getRandom(t,i){return Math.floor(Math.random()*(i-t+1))+t}LabaManager.attributes.add("maxRange",{type:"number",default:2500,title:"Max Range"}),LabaManager.attributes.add("minRange",{type:"number",default:-300,title:"Min Range"}),LabaManager.attributes.add("displayIcon",{type:"entity",assetType:"sprite",array:!0}),LabaManager.attributes.add("startBtn",{type:"entity"}),LabaManager.prototype.initialize=function(){this.script_Coin=this.app.root.findByName("CoinUI"),this.betText=this.entity.findByName("BetText"),this.betSize=this.entity.findByName("BetSize"),this.start=!1,this.speed_1=0,this.speed_2=0,this.speed_3=0,this.speed_4=0,this.speed_5=0,this.speedSize_1=25,this.speedSize_2=25,this.speedSize_3=25,this.speedSize_4=25,this.speedSize_5=25,this.endDistance_1=0,this.endDistance_2=0,this.endDistance_3=0,this.endDistance_4=0,this.endDistance_5=0,this.run1=!1,this.run2=!1,this.run3=!1,this.run4=!1,this.run5=!1,this.row_1_line=[],this.row_1_line[0]=[[1,0,0],[1,0,0],[1,0,0],[1,0,0],[1,0,0]],this.row_1_line[1]=[[1,0,0],[0,1,0],[0,0,1],[0,1,0],[1,0,0]],this.row_1_line[2]=[[1,0,0],[1,0,0],[0,1,0],[0,0,1],[0,0,1]],this.row_2_line=[],this.row_2_line[0]=[[0,1,0],[0,1,0],[0,1,0],[0,1,0],[0,1,0]],this.row_2_line[1]=[[0,1,0],[1,0,0],[1,0,0],[1,0,0],[0,1,0]],this.row_2_line[2]=[[0,1,0],[0,0,1],[0,0,1],[0,0,1],[0,1,0]],this.row_2_line[3]=[[0,1,0],[0,0,1],[0,1,0],[1,0,0],[0,1,0]],this.row_3_line=[],this.row_3_line[0]=[[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],this.row_3_line[1]=[[0,0,1],[0,1,0],[1,0,0],[0,1,0],[0,0,1]],this.row_3_line[2]=[[0,0,1],[0,0,1],[0,1,0],[1,0,0],[1,0,0]],this.r=0,this.r2=0,this.r3=0,this.r4=0,this.r5=0,this.random=[this.r,this.r2,this.r3,this.r4,this.r5],this.Roulette_1=[],this.Roulette_2=[],this.Roulette_3=[],this.Roulette_4=[],this.Roulette_5=[],this.roulette=[this.Roulette_1,this.Roulette_2,this.Roulette_3,this.Roulette_4,this.Roulette_5];var t=[["L1","L2","L3","L4","L5","H1","H2","H3","H4","H5","L1","L2","L3","L4","L5","S","H1","H2","H3","H4"],["L1","L2","L3","L4","L5","H1","H2","H3","H4","H5","L1","L2","L3","L4","L5","S","H1","H2","B","W"],["L1","L2","L3","L4","L5","H1","H2","H3","H4","H5","L1","L2","L3","L4","L5","S","H1","H2","B","W"],["L1","L2","L3","L4","L5","H1","H2","H3","H4","H5","L1","L2","L3","L4","L5","S","H1","H2","B","W"],["L1","L2","L3","L4","L5","H1","H2","H3","H4","H5","L1","L2","L3","L4","L5","S","H1","H2","H3","B"]];for(m=0;t.length>m;m++){var e=t[m],s=this.roulette[m];for(i=0;e.length>i;i++)for(n=0;this.displayIcon.length>n;n++)if(e[i]==this.displayIcon[n].name){var o=this.displayIcon[n].clone();this.entity.addChild(o),s[i]=o;break}}var h=-150,l=0;for(m=0;this.roulette.length>m;m++){var a=this.roulette[m];for(console.log(a.length),l=0,i=0;a.length>i;i++)a[i].setLocalPosition(h,l,0);h+=150}this.bet1=this.entity.findByName("1"),this.bet100=this.entity.findByName("100"),this.bet1000=this.entity.findByName("1000"),this.bet10000=this.entity.findByName("10000"),this.bet100000=this.entity.findByName("100000"),this.bet50=this.entity.findByName("50"),this.bet500=this.entity.findByName("500"),this.bet5000=this.entity.findByName("5000"),this.bet50000=this.entity.findByName("50000"),this.bet500000=this.entity.findByName("500000"),this.startBtn.element.on("click",this.onReleaseStart,this),this.btnPlus=this.entity.findByName("Bet_Add"),this.btnMinus=this.entity.findByName("Bet_Subtract"),this.setValue(1),this.bet=1,this.bet1.element.on("click",(function(t){this.bet=1,this.betSize.element.text=this.bet}),this),this.bet100.element.on("click",(function(t){this.bet=100,this.betSize.element.text=this.bet}),this),this.bet1000.element.on("click",(function(t){this.bet=1e3,this.betSize.element.text=this.bet}),this),this.bet10000.element.on("click",(function(t){this.bet=1e4,this.betSize.element.text=this.bet}),this),this.bet100000.element.on("click",(function(t){this.bet=1e5,this.betSize.element.text=this.bet}),this),this.bet50.element.on("click",(function(t){this.bet=50,this.betSize.element.text=this.bet}),this),this.bet500.element.on("click",(function(t){this.bet=500,this.betSize.element.text=this.bet}),this),this.bet5000.element.on("click",(function(t){this.bet=5e3,this.betSize.element.text=this.bet}),this),this.bet50000.element.on("click",(function(t){this.bet=5e4,this.betSize.element.text=this.bet}),this),this.bet500000.element.on("click",(function(t){this.bet=5e5,this.betSize.element.text=this.bet}),this),this.btnPlus.element.on("click",(function(t){this.setValue(this.value+this.bet)}),this),this.btnMinus.element.on("click",(function(t){this.setValue(this.value-this.bet)}),this),console.log(getRandomArray(0,19,20))},LabaManager.prototype.update=function(t){if(this.start&&(this.run1&&(this.speed_1<5150&&this.run1?this.speed_1=this.speed_1+this.speedSize_1:this.run1=!1),this.run2&&(this.speed_2<5650&&this.run2?this.speed_2=this.speed_2+this.speedSize_2:this.run2=!1),this.run3&&(this.speed_3<6150&&this.run3?this.speed_3=this.speed_3+this.speedSize_3:this.run3=!1),this.run4&&(this.speed_4<6650&&this.run4?this.speed_4=this.speed_4+this.speedSize_4:this.run4=!1),this.run5))if(this.speed_5<7150&&this.run5)this.speed_5=this.speed_5+this.speedSize_5;else{this.run5=!1,this.start=!1,console.log("End");var e=[];for(e[0]=["0","0","0"],e[1]=["0","0","0"],e[2]=["0","0","0"],e[3]=["0","0","0"],e[4]=["0","0","0"],this.random=[this.r,this.r2,this.r3,this.r4,this.r5],i=0;e.length>i;i++){var s=this.roulette[i],o=this.random[i];e[i]=18==o?[s[0].name,s[o+1].name,s[o].name]:19==o?[s[1].name,s[0].name,s[o].name]:[s[o+2].name,s[o+1].name,s[o].name]}console.log("result is here --\x3e ",e);var h=e[0],l=h[2],a=h[1],_=h[0],r=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],u=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],c=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];for(i=0;e.length>i;i++){var d=e[i],g=r[i],L=u[i],R=c[i];for(n=2;n>=0;n--)l==d[n]||"W"==d[n]?g[n]=1:g[n]=0,a==d[n]||"W"==d[n]?L[n]=1:L[n]=0,_==d[n]||"W"==d[n]?R[n]=1:R[n]=0}var f=[],p=[],b=[],y=[],P=[],z=[],S=0,x=0,H=0;for(n=0;this.row_1_line.length>n;n++){var M=this.row_1_line[n];for(k=0;5>k;k++){var v=c[k],D=M[k];for(m=0;3>m;m++)1==v[m]&&1==D[m]&&(f[S]=n,y[S]=k,S++)}}for(n=0;this.row_2_line.length>n;n++){var B=this.row_2_line[n];for(k=0;5>k;k++){var w=u[k],N=B[k];for(m=0;3>m;m++)1==w[m]&&1==N[m]&&(p[x]=n,P[x]=k,x++)}}for(n=0;this.row_3_line.length>n;n++){var W=this.row_3_line[n];for(k=0;5>k;k++){var I=r[k],T=W[k];for(m=0;3>m;m++)1==I[m]&&1==T[m]&&(b[H]=n,z[H]=k,H++)}}var V=0,A=0,C=0,E=0,O=0,U=0,j=0,q=0,F=0,G=[],J=[],K=[],Q=[],X=[],Y=[],Z=0,$=0,tt=0;E=f[0],O=p[0],U=b[0];var it=0;for(i=0;f.length>i;i++)if(E!=f[i]&&(E=f[i],V=0),++V>=3)for(j=0,n=0;f.length>n;n++)if(f[i]==f[n]&&y[n]==j&&++j>=3)if(it=f[i],j,"0"==Z)G[0]=it,Q[0]=j,Z++;else for(m=0;Z>m;m++)G[m]!=it?(G[Z]=it,Z++):Q[m]=j;var et=0;for(i=0;p.length>i;i++)if(O!=p[i]&&(O=p[i],A=0),++A>=3)for(q=0,n=0;p.length>n;n++)if(p[i]==p[n]&&P[n]==q&&++q>=3)if(et=p[i],q,"0"==$)J[0]=et,X[0]=q,$++;else for(m=0;$>m;m++)J[m]!=et?(J[$]=et,$++):X[m]=q;var st=0;for(i=0;b.length>i;i++)if(U!=b[i]&&(U=b[i],C=0),++C>=3)for(F=0,n=0;b.length>n;n++)if(b[i]==b[n]&&z[n]==F&&++F>=3)if(st=b[i],F,"0"==tt)K[0]=st,Y[0]=F,tt++;else for(m=0;tt>m;m++)K[m]!=st?(K[tt]=st,tt++):Y[m]=F;for(i=0;G.length>i;i++)console.log("第一列___賠率："+_+"。連線數量："+Q[i]+"。連線類型："+G[i]);for(i=0;J.length>i;i++)console.log("第二列___賠率："+a+"。連線數量："+X[i]+"。連線類型："+J[i]);for(i=0;K.length>i;i++)console.log("第三列___賠率："+l+"。連線數量："+Y[i]+"。連線類型："+K[i]);e=null,h=null,l=null,a=null,_=null,r=null,u=null,c=null,f=null,p=null,b=null,y=null,P=null,z=null,S=null,x=null,H=null,V=null,A=null,C=null,E=null,O=null,U=null,j=null,q=null,F=null,null,null,null,G=null,J=null,K=null,Q=null,X=null,Y=null,Z=null,$=null,tt=null}this.speed_1<=-150&&(this.speedSize_1=Math.abs(this.speedSize_1)),this.speed_2<=-200&&(this.speedSize_2=Math.abs(this.speedSize_2)),this.speed_3<=-250&&(this.speedSize_3=Math.abs(this.speedSize_3)),this.speed_4<=-300&&(this.speedSize_4=Math.abs(this.speedSize_4)),this.speed_5<=-350&&(this.speedSize_5=Math.abs(this.speedSize_5)),this.road_1(t),this.road_2(t),this.road_3(t),this.road_4(t),this.road_5(t)},LabaManager.prototype.road_1=function(t){if(this.run1)for(i=0;this.Roulette_1.length>i;i++)this.Roulette_1[i].getLocalPosition().y<=this.maxRange&&this.Roulette_1[i].getLocalPosition().y>this.minRange?(this.Roulette_1[i].getLocalPosition().y-=t*this.speed_1,this.Roulette_1[i].setLocalPosition(this.Roulette_1[i].getLocalPosition().x,this.Roulette_1[i].getLocalPosition().y,this.Roulette_1[i].getLocalPosition().z)):this.Roulette_1[i].setLocalPosition(this.Roulette_1[i].getLocalPosition().x,this.maxRange,this.Roulette_1[i].getLocalPosition().z);else for(this.endDistance_1>0&&(this.endDistance_1-=250*t),i=0;this.Roulette_1.length>i;i++)if(this.r==i){var e=0,s=0;for(n=i;this.Roulette_1.length>n;n++)this.Roulette_1[n].setLocalPosition(this.Roulette_1[i].getLocalPosition().x,-200+e-this.endDistance_1,0),e+=100,s++;for(m=0;this.Roulette_1.length-s>m;m++)this.Roulette_1[m].setLocalPosition(this.Roulette_1[i].getLocalPosition().x,-200+e-this.endDistance_1,0),e+=100;break}},LabaManager.prototype.road_2=function(t){if(this.run2)for(i=0;this.Roulette_2.length>i;i++)this.Roulette_2[i].getLocalPosition().y<=this.maxRange&&this.Roulette_2[i].getLocalPosition().y>this.minRange?(this.Roulette_2[i].getLocalPosition().y-=t*this.speed_2,this.Roulette_2[i].setLocalPosition(this.Roulette_2[i].getLocalPosition().x,this.Roulette_2[i].getLocalPosition().y,this.Roulette_2[i].getLocalPosition().z)):this.Roulette_2[i].setLocalPosition(this.Roulette_2[i].getLocalPosition().x,this.maxRange,this.Roulette_2[i].getLocalPosition().z);else for(this.endDistance_2>0&&(this.endDistance_2-=250*t),i=0;this.Roulette_2.length>i;i++)if(this.r2==i){var e=0,s=0;for(n=i;this.Roulette_2.length>n;n++)this.Roulette_2[n].setLocalPosition(this.Roulette_2[i].getLocalPosition().x,-200+e-this.endDistance_2,0),e+=100,s++;for(m=0;this.Roulette_2.length-s>m;m++)this.Roulette_2[m].setLocalPosition(this.Roulette_2[i].getLocalPosition().x,-200+e-this.endDistance_2,0),e+=100;break}},LabaManager.prototype.road_3=function(t){if(this.run3)for(i=0;this.Roulette_3.length>i;i++)this.Roulette_3[i].getLocalPosition().y<=this.maxRange&&this.Roulette_3[i].getLocalPosition().y>this.minRange?(this.Roulette_3[i].getLocalPosition().y-=t*this.speed_3,this.Roulette_3[i].setLocalPosition(this.Roulette_3[i].getLocalPosition().x,this.Roulette_3[i].getLocalPosition().y,this.Roulette_3[i].getLocalPosition().z)):this.Roulette_3[i].setLocalPosition(this.Roulette_3[i].getLocalPosition().x,this.maxRange,this.Roulette_3[i].getLocalPosition().z);else for(this.endDistance_3>0&&(this.endDistance_3-=250*t),i=0;this.Roulette_3.length>i;i++)if(this.r3==i){var e=0,s=0;for(n=i;this.Roulette_3.length>n;n++)this.Roulette_3[n].setLocalPosition(this.Roulette_3[i].getLocalPosition().x,-200+e-this.endDistance_3,0),e+=100,s++;for(m=0;this.Roulette_3.length-s>m;m++)this.Roulette_3[m].setLocalPosition(this.Roulette_3[i].getLocalPosition().x,-200+e-this.endDistance_3,0),e+=100;break}},LabaManager.prototype.road_4=function(t){if(this.run4)for(i=0;this.Roulette_4.length>i;i++)this.Roulette_4[i].getLocalPosition().y<=this.maxRange&&this.Roulette_4[i].getLocalPosition().y>this.minRange?(this.Roulette_4[i].getLocalPosition().y-=t*this.speed_4,this.Roulette_4[i].setLocalPosition(this.Roulette_4[i].getLocalPosition().x,this.Roulette_4[i].getLocalPosition().y,this.Roulette_4[i].getLocalPosition().z)):this.Roulette_4[i].setLocalPosition(this.Roulette_4[i].getLocalPosition().x,this.maxRange,this.Roulette_4[i].getLocalPosition().z);else for(this.endDistance_4>0&&(this.endDistance_4-=250*t),i=0;this.Roulette_4.length>i;i++)if(this.r4==i){var e=0,s=0;for(n=i;this.Roulette_4.length>n;n++)this.Roulette_4[n].setLocalPosition(this.Roulette_4[i].getLocalPosition().x,-200+e-this.endDistance_4,0),e+=100,s++;for(m=0;this.Roulette_4.length-s>m;m++)this.Roulette_4[m].setLocalPosition(this.Roulette_4[i].getLocalPosition().x,-200+e-this.endDistance_4,0),e+=100;break}},LabaManager.prototype.road_5=function(t){if(this.run5)for(i=0;this.Roulette_5.length>i;i++)this.Roulette_5[i].getLocalPosition().y<=this.maxRange&&this.Roulette_5[i].getLocalPosition().y>this.minRange?(this.Roulette_5[i].getLocalPosition().y-=t*this.speed_5,this.Roulette_5[i].setLocalPosition(this.Roulette_5[i].getLocalPosition().x,this.Roulette_5[i].getLocalPosition().y,this.Roulette_5[i].getLocalPosition().z)):this.Roulette_5[i].setLocalPosition(this.Roulette_5[i].getLocalPosition().x,this.maxRange,this.Roulette_5[i].getLocalPosition().z);else for(this.endDistance_5>0&&(this.endDistance_5-=250*t),i=0;this.Roulette_5.length>i;i++)if(this.r5==i){var e=0,s=0;for(n=i;this.Roulette_5.length>n;n++)this.Roulette_5[n].setLocalPosition(this.Roulette_5[i].getLocalPosition().x,-200+e-this.endDistance_5,0),e+=100,s++;for(m=0;this.Roulette_5.length-s>m;m++)this.Roulette_5[m].setLocalPosition(this.Roulette_5[i].getLocalPosition().x,-200+e-this.endDistance_5,0),e+=100;break}},LabaManager.prototype.onReleaseStart=function(t){this.start||(console.log("Start"),this.start=!0,this.run1=!0,this.run2=!0,this.run3=!0,this.run4=!0,this.run5=!0,this.speed_1=0,this.speed_2=0,this.speed_3=0,this.speed_4=0,this.speed_5=0,this.endDistance_1=50,this.endDistance_2=50,this.endDistance_3=50,this.endDistance_4=50,this.endDistance_5=50,this.speedSize_1=-this.speedSize_1,this.speedSize_2=-this.speedSize_2,this.speedSize_3=-this.speedSize_3,this.speedSize_4=-this.speedSize_4,this.speedSize_5=-this.speedSize_5,this.r=Math.floor(5),this.r2=Math.floor(5),this.r3=Math.floor(5),this.r4=Math.floor(5*Math.random()),this.r5=Math.floor(5*Math.random()))},LabaManager.prototype.setValue=function(t){this.start||(this.value=pc.math.clamp(t,1,1e6),this.betText.element.text=this.value)};var Button=pc.createScript("button");Button.attributes.add("hoverAsset",{type:"asset",assetType:"sprite"}),Button.attributes.add("activeAsset",{type:"asset",assetType:"sprite"}),Button.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,this.hovered=!1,this.entity.element.on("mouseenter",this.onEnter,this),this.entity.element.on("mousedown",this.onPress,this),this.entity.element.on("mouseup",this.onRelease,this),this.entity.element.on("mouseleave",this.onLeave,this),this.entity.element.on("touchstart",this.onPress,this),this.entity.element.on("touchend",this.onRelease,this)},Button.prototype.onEnter=function(t){this.hovered=!0,t.element.sprite=this.hoverAsset,document.body.style.cursor="pointer"},Button.prototype.onLeave=function(t){this.hovered=!1,t.element.sprite=this.originalTexture,document.body.style.cursor="default"},Button.prototype.onPress=function(t){t.element.sprite=this.activeAsset},Button.prototype.onRelease=function(t){t.element.sprite=this.hovered?this.hoverAsset:this.originalTexture};var CoinManager=pc.createScript("coinManager");CoinManager.prototype.initialize=function(){this._score=9999999},CoinManager.prototype.update=function(e){},CoinManager.prototype.getScore=function(){return this._score},CoinManager.prototype.addScore=function(e){this._score+=e,this.app.fire("game:score",this._score)},CoinManager.prototype.showScore=function(e){this.app.fire("game:scoreText",this._score)},CoinManager.prototype.resetScore=function(){this._score=0,this.app.fire("game:score",this._score)};var Score=pc.createScript("score");Score.prototype.initialize=function(){this.score=this.entity,this.on("enable",this.onEnable,this),this.on("disable",this.onDisable,this),this.onEnable(),this._changeScore(9999999)},Score.prototype.onEnable=function(){},Score.prototype.onDisable=function(){this.app.off("game:score",this._changeScore,this)},Score.prototype._changeScore=function(e){this.app.on("game:scoreText",this._changeScore,this),this.score.element.text=e.toString()};var Wild=pc.createScript("wild");Wild.attributes.add("hoverAsset",{type:"asset",assetType:"texture"}),Wild.attributes.add("activeAsset",{type:"asset",assetType:"texture"});var wild_count=0,wild_type=[];Wild.prototype.initialize=function(){this.originalTexture=this.entity.element.textureAsset,wild_count=0},Wild.prototype.changeImage=function(t){return this.entity.element.textureAsset=this.activeAsset,"0"==wild_count?(wild_type[wild_count]=t,wild_count++):(wild_type[wild_count]=t,wild_type[wild_count]!=t&&wild_count++),t},Wild.prototype.defaultImage=function(){this.entity.element.textureAsset=this.originalTexture,wild_count=0,wild_type=[]};var ProgressBar=pc.createScript("progressBar");ProgressBar.attributes.add("progressImage",{type:"entity"}),ProgressBar.attributes.add("progressImageMaxWidth",{type:"number"}),ProgressBar.prototype.initialize=function(){this.imageRect=this.progressImage.element.rect.clone(),this.setProgress(0),this.increase=!0},ProgressBar.prototype.setProgress=function(e){e=pc.math.clamp(e,0,1),this.progress=e;var s=pc.math.lerp(0,this.progressImageMaxWidth,e);this.progressImage.element.width=s,this.imageRect.copy(this.progressImage.element.rect),this.imageRect.z=e,this.progressImage.element.rect=this.imageRect},ProgressBar.prototype.update=function(e){var s=this.increase?e:-e;this.setProgress(this.progress+s),this.progress>=1?this.increase=!1:this.progress<=0&&(this.increase=!0)};