var toggleclass=document.getElementsByClassName("toggle-class"),gettoggleclassnumber="";for(i=0;i<toggleclass.length;i++){function getclassnumber(){if(gettarget=this.getAttribute("data-target"),getclass=this.getAttribute("data-toggle-class"),this.getAttribute("data-this-toggle-class")==this.getAttribute("data-this-toggle-class")&&this.classList.toggle(this.getAttribute("data-this-toggle-class")),"."==gettarget.slice(0,1))for(getTarget=gettarget.slice(1),i=0;i<toggleclass.length;i++)document.getElementsByClassName(getTarget)[i].classList.toggle(getclass);else"#"==gettarget.slice(0,1)&&(getTarget=gettarget.slice(1),document.getElementById(getTarget).classList.toggle(getclass))}gettoggleclassnumber+=toggleclass[i].addEventListener("click",getclassnumber)}var addclass=document.getElementsByClassName("add-class"),getaddclassnumber="";for(i=0;i<addclass.length;i++){function getclassnumber(){if(gettarget=this.getAttribute("data-target"),getaddtarget=this.getAttribute("data-add-target"),getclass=this.getAttribute("data-add-class"),getaddclass=this.getAttribute("data-add-target-class"),this.getAttribute("data-this-add-class")==this.getAttribute("data-this-add-class")&&this.classList.add(this.getAttribute("data-add-class")),"."==gettarget.slice(0,1))for(getTarget=gettarget.slice(1),i=0;i<addclass.length;i++)document.getElementsByClassName(getTarget)[i].classList.add(getclass);else if("#"==gettarget.slice(0,1))getTarget=gettarget.slice(1),document.getElementById(getTarget).classList.add(getclass);else if("."==getaddtarget.slice(0,1))for(getAddTarget=getaddtarget.slice(1),r=0;r<addclass.length;r++)document.getElementsByClassName(getAddTarget)[r].classList.add(getaddclass);else"#"==getaddtarget.slice(0,1)&&(getAddTarget=getaddtarget.slice(1),document.getElementById(getAddTarget).classList.add(getaddclass))}getaddclassnumber+=addclass[i].addEventListener("click",getclassnumber)}var removeclass=document.getElementsByClassName("remove-class"),getremoveclassnumber="";for(i=0;i<removeclass.length;i++){function getclassnumber(){if(gettarget=this.getAttribute("data-target"),getremovetarget=this.getAttribute("data-remove-target"),getclass=this.getAttribute("data-remove-class"),getremoveclass=this.getAttribute("data-remove-target-class"),this.getAttribute("data-this-remove-class")==this.getAttribute("data-this-remove-class")&&this.classList.remove(this.getAttribute("data-this-remove-class")),"."==gettarget.slice(0,1))for(getTarget=gettarget.slice(1),i=0;i<removeclass.length;i++)document.getElementsByClassName(getTarget)[i].classList.remove(getclass);else if("#"==gettarget.slice(0,1))getTarget=gettarget.slice(1),document.getElementById(getTarget).classList.remove(getclass);else if("."==getremovetarget.slice(0,1))for(getRemoveTarget=getremovetarget.slice(1),r=0;r<removeclass.length;r++)document.getElementsByClassName(getRemoveTarget)[r].classList.remove(getremoveclass);else"#"==getremovetarget.slice(0,1)&&(getRemoveTarget=getremovetarget.slice(1),document.getElementById(getRemoveTarget).classList.remove(getremoveclass))}getremoveclassnumber+=removeclass[i].addEventListener("click",getclassnumber)}