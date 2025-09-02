// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: skin definitivo 1.ggsk
// Generated 2025-09-02T17:15:50

function pano2vrSkin(player,base) {
	player.addVariable('opt_hotspot_preview', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_thumbnail_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_loader', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_loader_mulires', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_url', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu_show', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_userdata', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_close_buton', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_website', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_mobile', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnail_menu_auto_hide', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_timer', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_360image_once', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	player.addVariable('pos_zoom_in', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_zoom_out', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_autorotate', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_information', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_thumbnail', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_gyro', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_fullscreen', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_controller', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_360image', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_enter_vr', 1, 0, { ignoreInState: 0  });
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_thumbnail_menu', 2, false, { ignoreInState: 1  });
	player.addVariable('Andar_atual', 1, 9.00, { ignoreInState: 0  });
	player.addVariable('Final_numero', 1, 1.00, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._full_screen_desktop=document.createElement('div');
		els=me._full_screen_desktop__img=document.createElement('img');
		els.className='ggskin ggskin_full_screen_desktop';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RjcwRDYwNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RjcwRDYwMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp+Zcm0AAA3ySURBVHjazFoJUFRXFn3dNA224AYuuCQuuKBGCW4RUVwwKigiWmOCaMVlSKI1pTEZnIlVWkkGFCeOzpRjjSvBLeWUIq4Umhh0BBUjGiOKGyoSVDDIvj'+
			'RLzznPflaH2DRtxhp+1av+/fv99++5y7n3vt+aYcOGibZt23LoevTo4e3n5ze2Z8+eAzt06NBai0MIYRJN69Dk5+cX3bt3LyM9PT0ZI624uLgyNzdX6Orq6kRVVVUzX1/fuWFhYeEGg0EvmvgBxbtj9PDx8Qk+dOhQQnx8/Eaj0Vigq6mpcRw7duy8BQsWzFWTS0tLa/FR0rx5c5MGRxPCYaqoqDBBZhdXV1e9g4ODmDZtWgiM4bxv376vdAMHDvRevHhxuJqdmZl5HaY7DFd7COQa3tCUwPz0008myOf+2muvTXzrrbcG82JQUNDbLVq00OhCQkLGNmvWzJEXU1JSru3YsWOFp6fnvddff71JupjJZBKIF45UWGnlmDFjhjk7O2sR+z7awYMHD+SksrIy45EjRw6fOXPmHiYJnU7XJMHQ6/V6PT0oLzY29t+QtYqy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="full screen desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._full_screen_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._full_screen_desktop.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._full_screen_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._full_screen_desktop);
		el=me._logo_desktop=document.createElement('div');
		els=me._logo_desktop__img=document.createElement('img');
		els.className='ggskin ggskin_logo_desktop';
		hs=basePath + 'images/logo_desktop.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="logo desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 107px;';
		hs+='left : 63px;';
		hs+='opacity : 0.90001;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : hidden;';
		hs+='width : 119px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._logo_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._logo_desktop.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._logo_desktop);
		el=me._menu_desktop=document.createElement('div');
		el.ggId="Menu desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 532px;';
		hs+='left : -18px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : hidden;';
		hs+='width : 312px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._menu_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBODdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBNzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkp5/vEAAAfxSURBVHja7N1faNVlGMDxsylCKdOrCCwIxbRILGERtlZR1GWiCcMirCSoG4UugvBSgsDA24xIwpYQ1i7LLsIxLA0yMyqTSVARdacpwXCu561XOZtn82'+
			'w7Zzvn9fOBp1f6M+E5fP39tvOnjrGxsUqz7N/Y0xVHT8w9MXfmuTVmWcziCtx4Lsaci/kj5uc838cMbRsYOt+s37Sj0aFH3Cvi6It5ImZ9zAKPLVzXaMw3MYdjDkb0Z1su9Ig7xbw55qWYB9LX9bjBjKUov4rZF3Mooh+d19Bz4M/GvBqz0uMDDTcc81bMgdkEP+PQI/LuOPbG3OuxgKb7NmZnxP71nIQegd8Ux+58m95p/zBnLufb+V0R/D9NCz0iXxVHf8zddg7z5oeYrRH7mXr/g85pRP5IHIMih3mXGjySm2xc6PEFN8XxSUyXHUNLWJqazG3O/tY9f6H9Fc+HQytKP4nfFrfxH8849Ij84TgGYhbZJ7SskZiNEfuRaYeef/A26HYd2kJ6+WzvZD+g65wk8vQUWr/IoW2kVvuj3ZvrDj28UfHTdWg3qdnddd26'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 30px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 442px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._menu_desktop.appendChild(me._image_2);
		el=me._and_9=document.createElement('div');
		els=me._and_9__img=document.createElement('img');
		els.className='ggskin ggskin_and_9';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_9.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("9.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node29}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node45}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node46}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node30}","");
			}
		}
		me._and_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_9=document.createElement('div');
		els=me._txt_9__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_9.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>9<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_9.ggUpdateText();
		el.appendChild(els);
		me._txt_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_9.ggUpdatePosition=function (useTransition) {
		}
		me._and_9.appendChild(me._txt_9);
		me._menu_desktop.appendChild(me._and_9);
		el=me._and_8=document.createElement('div');
		els=me._and_8__img=document.createElement('img');
		els.className='ggskin ggskin_and_8';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_8.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("8.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node28}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node44}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node47}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node31}","");
			}
		}
		me._and_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_8=document.createElement('div');
		els=me._txt_8__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_8.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>8<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_8.ggUpdateText();
		el.appendChild(els);
		me._txt_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_8.ggUpdatePosition=function (useTransition) {
		}
		me._and_8.appendChild(me._txt_8);
		me._menu_desktop.appendChild(me._and_8);
		el=me._and_7=document.createElement('div');
		els=me._and_7__img=document.createElement('img');
		els.className='ggskin ggskin_and_7';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 239px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_7.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("7.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node27}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node43}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node48}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node32}","");
			}
		}
		me._and_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_7=document.createElement('div');
		els=me._txt_7__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_7.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>7<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_7.ggUpdateText();
		el.appendChild(els);
		me._txt_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_7.ggUpdatePosition=function (useTransition) {
		}
		me._and_7.appendChild(me._txt_7);
		me._menu_desktop.appendChild(me._and_7);
		el=me._and_6=document.createElement('div');
		els=me._and_6__img=document.createElement('img');
		els.className='ggskin ggskin_and_6';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 239px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_6.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("6.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node26}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node42}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node49}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node33}","");
			}
		}
		me._and_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_6=document.createElement('div');
		els=me._txt_6__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_6.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>6<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_6.ggUpdateText();
		el.appendChild(els);
		me._txt_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_6.ggUpdatePosition=function (useTransition) {
		}
		me._and_6.appendChild(me._txt_6);
		me._menu_desktop.appendChild(me._and_6);
		el=me._and_5=document.createElement('div');
		els=me._and_5__img=document.createElement('img');
		els.className='ggskin ggskin_and_5';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 303px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_5.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("5.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node25}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node41}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node50}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node34}","");
			}
		}
		me._and_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_5=document.createElement('div');
		els=me._txt_5__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_5.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>5<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_5.ggUpdateText();
		el.appendChild(els);
		me._txt_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_5.ggUpdatePosition=function (useTransition) {
		}
		me._and_5.appendChild(me._txt_5);
		me._menu_desktop.appendChild(me._and_5);
		el=me._and_4=document.createElement('div');
		els=me._and_4__img=document.createElement('img');
		els.className='ggskin ggskin_and_4';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 303px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_4.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("4.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node24}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node40}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node51}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node35}","");
			}
		}
		me._and_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_4=document.createElement('div');
		els=me._txt_4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_4.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>4<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_4.ggUpdateText();
		el.appendChild(els);
		me._txt_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_4.ggUpdatePosition=function (useTransition) {
		}
		me._and_4.appendChild(me._txt_4);
		me._menu_desktop.appendChild(me._and_4);
		el=me._and_3=document.createElement('div');
		els=me._and_3__img=document.createElement('img');
		els.className='ggskin ggskin_and_3';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 367px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_3.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("3.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node23}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node39}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node52}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node36}","");
			}
		}
		me._and_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_3=document.createElement('div');
		els=me._txt_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>3<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_3.ggUpdateText();
		el.appendChild(els);
		me._txt_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_3.ggUpdatePosition=function (useTransition) {
		}
		me._and_3.appendChild(me._txt_3);
		me._menu_desktop.appendChild(me._and_3);
		el=me._and_2=document.createElement('div');
		els=me._and_2__img=document.createElement('img');
		els.className='ggskin ggskin_and_2';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="and 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 367px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._and_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._and_2.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("2.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node22}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node38}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node53}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node37}","");
			}
		}
		me._and_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_2=document.createElement('div');
		els=me._txt_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>2<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_2.ggUpdateText();
		el.appendChild(els);
		me._txt_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_2.ggUpdatePosition=function (useTransition) {
		}
		me._and_2.appendChild(me._txt_2);
		me._menu_desktop.appendChild(me._and_2);
		el=me._final_do_ap_14=document.createElement('div');
		els=me._final_do_ap_14__img=document.createElement('img');
		els.className='ggskin ggskin_final_do_ap_14';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Final do ap 1-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 41px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._final_do_ap_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_do_ap_14.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("1.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node22}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node23}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node24}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node25}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node26}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node27}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node28}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node29}","");
			}
		}
		me._final_do_ap_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_14=document.createElement('div');
		els=me._final_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 1-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_14.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 1-4<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_14.ggUpdateText();
		el.appendChild(els);
		me._final_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_14.ggUpdatePosition=function (useTransition) {
		}
		me._final_do_ap_14.appendChild(me._final_14);
		me._menu_desktop.appendChild(me._final_do_ap_14);
		el=me._final_do_ap_1417=document.createElement('div');
		els=me._final_do_ap_1417__img=document.createElement('img');
		els.className='ggskin ggskin_final_do_ap_1417';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="final do ap 14-17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 141px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._final_do_ap_1417.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_do_ap_1417.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("4.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node37}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node36}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node35}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node34}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node33}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node32}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node31}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node30}","");
			}
		}
		me._final_do_ap_1417.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_1417=document.createElement('div');
		els=me._final_1417__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 14-17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_1417.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 14-17<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_1417.ggUpdateText();
		el.appendChild(els);
		me._final_1417.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_1417.ggUpdatePosition=function (useTransition) {
		}
		me._final_do_ap_1417.appendChild(me._final_1417);
		me._menu_desktop.appendChild(me._final_do_ap_1417);
		el=me._final_do_ap_58=document.createElement('div');
		els=me._final_do_ap_58__img=document.createElement('img');
		els.className='ggskin ggskin_final_do_ap_58';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAtCAYAAABYtc7wAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMN'+
			'K/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqh'+
			'GJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ'+
			'7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQ'+
			'Y+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I3'+
			'7Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="final do ap 5-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 141px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 485px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._final_do_ap_58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_do_ap_58.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("2.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node38}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node39}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node40}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node41}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node42}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node43}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node44}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node45}","");
			}
		}
		me._final_do_ap_58.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_58=document.createElement('div');
		els=me._final_58__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 5-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_58.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 5-8<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_58.ggUpdateText();
		el.appendChild(els);
		me._final_58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_58.ggUpdatePosition=function (useTransition) {
		}
		me._final_do_ap_58.appendChild(me._final_58);
		me._menu_desktop.appendChild(me._final_do_ap_58);
		el=me._final_do_ap_913=document.createElement('div');
		els=me._final_do_ap_913__img=document.createElement('img');
		els.className='ggskin ggskin_final_do_ap_913';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="final do ap 9-13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 41px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 485px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._final_do_ap_913.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_do_ap_913.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("3.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node53}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node52}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node51}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node50}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node49}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node48}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node47}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node46}","");
			}
		}
		me._final_do_ap_913.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_913=document.createElement('div');
		els=me._final_913__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 9-13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_913.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 9-13<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_913.ggUpdateText();
		el.appendChild(els);
		me._final_913.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_913.ggUpdatePosition=function (useTransition) {
		}
		me._final_do_ap_913.appendChild(me._final_913);
		me._menu_desktop.appendChild(me._final_do_ap_913);
		el=me._apartamento=document.createElement('div');
		els=me._apartamento__img=document.createElement('img');
		els.className='ggskin ggskin_apartamento';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="apartamento";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 73px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 534px;';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._apartamento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._apartamento.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._apartamento.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_apartamento=document.createElement('div');
		els=me._txt_apartamento__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt apartamento";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_apartamento.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Apartamento<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_apartamento.ggUpdateText();
		el.appendChild(els);
		me._txt_apartamento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_apartamento.ggUpdatePosition=function (useTransition) {
		}
		me._apartamento.appendChild(me._txt_apartamento);
		me._menu_desktop.appendChild(me._apartamento);
		me.divSkin.appendChild(me._menu_desktop);
		el=me._menu_inferior=document.createElement('div');
		el.ggId="menu inferior";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 177px;';
		hs+='left : calc(50% - ((1918px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 1918px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_inferior.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_inferior.ggUpdatePosition=function (useTransition) {
		}
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTY0LjY0NXB4IiBoZWlnaHQ9Ijk0LjY0NXB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBzdHJva2Utd2lkdGg9IjQuNDNweCIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBmaWxsPSJyZ2IoMTU5LCA3OSwgNTkpIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgZD0iTTkuNDY0LDQuNjUyIEwxOTUyLjk2Niw0LjY1MiBDMTk1NS43MjgsNC42NTIgMTk1Ny45NjYsNi44OTEgMTk1Ny45NjYsOS42NTIgTDE5NTcuOTY2LDgyLjY0MiBDMT'+
			'k1Ny45NjYsODUuNDA0IDE5NTUuNzI4LDg3LjY0MiAxOTUyLjk2Niw4Ny42NDIgTDkuNDY0LDg3LjY0MiBDNi43MDMsODcuNjQyIDQuNDY0LDg1LjQwNCA0LjQ2NCw4Mi42NDIgTDQuNDY0LDkuNjUyIEM0LjQ2NCw2Ljg5MSA2LjcwMyw0LjY1MiA5LjQ2NCw0LjY1MiBaIiBzdHJva2U9InJnYigyMTUsIDE2MCwgODkpIi8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 49px;';
		hs+='left : calc(50% - ((10000px + 0px) / 2) + 0px);';
		hs+='opacity : 0.80006;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 10000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me._menu_inferior.appendChild(me._svg_1);
		me.divSkin.appendChild(me._menu_inferior);
		el=me._menu_lateral=document.createElement('div');
		el.ggId="menu lateral";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 277px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_lateral.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_lateral.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRDEzRDAwMTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRDEzRDAwMDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgu/GnAAAAHLSURBVHja7N0/SgNBGIfh2biQFAZBG/8cYAtBC2Mu4AU0aJsiOYnVXsIudmJOoBcwaezUA1htVkGbBUV/AxNYQtwy7gzvB2+RMMU8zE62TJSmqamYTd'+
			'VVidpRbRWb1U6h3tRMvaipyhYXxRWAnjpSDfO/01Tbrn116jBjlVdBDtVAtUw9J1LH6kCN1GQZ5ERduMV1H3tSQ7Wh7sqQjkeI8umcq/dG6U70PUOUMf055Mwdla/TtJAtd3m8noa7G1EIkMQEMBayFwpkPRRIHArEAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQHyBfoUA+Q4G8hgJ5CgUyVT8hQGYOE8TP71gVHjuKOSRXI08fMbvnUfmFOFE3nmHsXm/t3hf/ZP5eZWqgWnV/nNS1erAf4iULHtWl6qmOimp4ClN3'+
			'r/P5l/Efi+2CK7e4qxK1q9pqbcUb/1Yf7sX97BDZ4qJfAQYAL+45jNJsDK8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 85px;';
		hs+='height : 185px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._image_5);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 92px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.onclick=function (e) {
			player.openUrl("https:\/\/e2eng.com.br\/residencial-flex-candeias-premium\/","_blank");
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._image_6);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 135px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_7.onclick=function (e) {
			player.openUrl("tel:+557734259840\n","_blank");
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._image_7);
		el=me._image_8=document.createElement('div');
		els=me._image_8__img=document.createElement('img');
		els.className='ggskin ggskin_image_8';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 178px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_8.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/e2.engenharia\/","_blank");
		}
		me._image_8.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._image_8);
		el=me._image_9=document.createElement('div');
		els=me._image_9__img=document.createElement('img');
		els.className='ggskin ggskin_image_9';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 221px;';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_9.onclick=function (e) {
			player.openUrl("https:\/\/wa.me\/557734259840?text=Ol%C3%A1%2C%20vim%20do%20tour%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Flex%20Candeias%20Premium\n","_blank");
		}
		me._image_9.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._image_9);
		el=me._planta_baixa=document.createElement('div');
		els=me._planta_baixa__img=document.createElement('img');
		els.className='ggskin ggskin_planta_baixa';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMENGN0ZCNTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMENGN0ZCNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnMPqL8AAANqSURBVHjazJhvaE1xGMfP7u7dYjO2seaFkCKSfy/wYsK2vJm/S7w07yRFFC9W1Ja8sIgXSBSRCEWL8mf+FMULrdBCZJENu5thzNh2fZ/6nnr22++e3b'+
			'N73Oupz87O7/f87nl+z/N7nt/vHCcWizkgCxwGH0AU1IOZ7EsbGfiT7ThOI5juDJR+tr1y0iQhsN1imNt30EmjiAGlHv0L0mlcmOGLJ4XgO4iBjBTZJM9qASfEuF4PxZ/gDAekSsRZG8Gu8BCKHWBzGiI6AlSGEwh7iLMpAGWgiJ5sBxGQp/QlCp1gNPs6+Bt5QzznF3gJHvJexneHfcxmE9j7jz0W0css5GPgBF7z6cVv4Bb/L+S1hDrLeS+ea1A6NqRvtzJuQNj8LFSHYXNDKAZ+UTqveX3P9h6Ljk2eqkxNyjhXsi1Z7OoUqMhkqf4lYBYYaYxZzMowbONMkfq3FrSptlxee+KMafBYSp+DNK4KlINi8IPrJZNZ98xjR6oB+1RRF4O2sS0UlHE3iF/5xNKh5WO8mSQrFzj7Nq6poaQwwbakjTsF1oGd4Dm4C8aq'+
			'ftt+XMPJaOo4uf6gwiqyARwC+4k8aBk4x/4iVR8dHs0mGzuGGLSCk8wI0jjJvq3gJqhg2z3DS+/U/R/QaqyxPrCQyeQEaZzM+D64pnaGFtW/x9C/BOakopSIdIP5YAqzUE4Td8BcoyiL947z8JpjKehbQG2QpUTLG14lMZaCq0b/KlANjoLflvFRW/L4MS4zAR13Z1httItRK31sjb6Nc2c23uN4PU7puEd7efBEhqzY4qGYyuhhZ2szry0J6MbTafUY08tsHpZxx0AT6OL2M9Xi2W6Sz3vXe118+BgjIzs5kUngrfk+48e4r6CeD1gETgeQSFKM54GL8bavfqPWNBuu1jKbB8eKgLI8m1tendcLjMO3+2qGZT04D0YpXXm5ua1eSE4GYJyckl+AHUymKh32MPe6KD9L6JPGGhrpZtA0lV3lXHPJvmh3quNTmS2scq'+
			'R+Yhl4nYPdmRzhDMWgszx+R5JkBstLEyc/aPvKijMrOVlcMdbkAdawkoDWnOyzj+m1QUd7+QT2gEq5zv8j4pjSMDfdRn4TqeWbvNda6qM3IwF9F+k1ohdjdHLEc9JQCS6zgrd7nGJT9ZVJMvfRXwEGADOpR1XmLG4TAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="planta baixa";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='right : 90px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._planta_baixa.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._planta_baixa.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._planta_baixa);
		el=me._vdeo=document.createElement('div');
		els=me._vdeo__img=document.createElement('img');
		els.className='ggskin ggskin_vdeo';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMENGN0ZCOTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMENGN0ZCODdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp1czJAAAANBSURBVHjatJhNSFVBFMffu2lqjywzS+nrVa8W0aZykS3KhChaVEQugqRdCEltWrToYxEtksoMBJGMeiko7uSRi8gyqBDCaikRWVHYx8MPfJpP8/WfOB'+
			'eGw8y9c+9798AP7seZOf+ZuXfmzIQzmUzIo+WBGrAb7AIxsBIUgT8gCT6CITAI+sGMpwhClCHbQDP4mvFmo6AV7DSNZeJUBtoyubE4WOcWM+wyfMfAPVCqeT8HRsAvGrpC8o2CAk2ZFKgHHX6G76qmtSnwEBwHFZqyq8AR6uFxTT23vA5fi6ai66Dcw3coKAGXwKyivk5TUaoeGgLbPYrhbAQvFXU3u4k6qCjUlaUYjuqnOakTtRRMM+eeHAtyElauEhVnTsMBCbIZZPH6uKj1CuUbAhYlfoA0i/n/u7VoZrjIZopG8NllMSimpcavjSniXrHnKTGBTkhq50CRQUsHyF8Mw74sekyOPQ8i4mEN68JHBhUtUvwUolzMh6g7rJ5aMXzVrAu7DLpelBtnz06BYXCNlhtT62b31UJpQlKZpg/QrXV54JvDwisyiTrDnrLA'+
			'mFT2tWjxFknlJ/oAs7W1IA6egioX3wXwQbqvsChBs+1HKLcmksFXoNkha+Bxiy3mPBsKxs6BrQ7vU9J1vhCVlh4sDkhUB6XIOiuSructyqltK8uxGJGnHwZ1YNrBb7V0PWmxFmyimTpbmwTnaWPRZ+Av/2yjFrXGtgIPS0dY87yFdjh3DeupBCuk+3dC1AvmVGuyCVL0aIICNFDObmo83oCYvPIp77ZthiZHt0nvjZTiHM1i7fvNJt7l9ov77MVlg8pEUnaIFnS/gs6wuL1yPhVjL//Sfi/IfKoQTLG4lTzz7GEObwMW1c/iPVelw6VggTm2ByTopmIRj+p2MycUzq05FtSoiFHvtu+7rSj0zOQMwAUxEo8VdT8w3SF3arbrF8ASj2LE9HIWJBV1JryeujQ5HO00URodcfiz9oIb4Iumnna/py6nQZtD9pCkU5efYA'+
			'pEaFGPuizuDbQc+T4026yYLvxar8mZhJdvo4p20RMehYhdTzfYbxrLbfhUVgIOgD1gB1gDllGGkaa05Tt4T6nwExpeY/snwABVsVEhw0uOBwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="V\xeddeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='right : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vdeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vdeo.onclick=function (e) {
			me._pst_video.style.transition='none';
			me._pst_video.style.visibility=(Number(me._pst_video.style.opacity)>0||!me._pst_video.style.opacity)?'inherit':'hidden';
			me._pst_video.ggVisible=true;
			if (me._video_1.ggVideoNotLoaded) {
				me._video_1.ggInitMedia(me._video_1.ggVideoSource);
			}
			me._video_1.style.transition='none';
			me._video_1.style.visibility=(Number(me._video_1.style.opacity)>0||!me._video_1.style.opacity)?'inherit':'hidden';
			me._video_1.ggVisible=true;
			me._retangulo_do_video.style.transition='none';
			me._retangulo_do_video.style.visibility=(Number(me._retangulo_do_video.style.opacity)>0||!me._retangulo_do_video.style.opacity)?'inherit':'hidden';
			me._retangulo_do_video.ggVisible=true;
			me._x_do_video.style.transition='none';
			me._x_do_video.style.visibility=(Number(me._x_do_video.style.opacity)>0||!me._x_do_video.style.opacity)?'inherit':'hidden';
			me._x_do_video.ggVisible=true;
		}
		me._vdeo.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._vdeo);
		el=me._instrucoes_desktop=document.createElement('div');
		els=me._instrucoes_desktop__img=document.createElement('img');
		els.className='ggskin ggskin_instrucoes_desktop';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMENGN0ZCMTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMENGN0ZCMDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pik+i1oAAAL7SURBVHjaxJhLSFVBGMfvo9TyghmIYt2IDJEgg4yeiEgE7iIqexJBhVHYoseiFq2sNlFEK8nqRosIXIgEGUWPTegywULSCiHISntRqZc8/QfmwMfwnT'+
			'vfnAv3fPDjnntm5pv/vOc7cc/zYo5WAVrAerAcpEE5KAJ/wBfwAQyDF+ARkFeiBAlpBhnw23Oz96AD1EjqkQipAz1e/jYLLoCiXPXFLUN2AlwLSHsDBvTvJzANUnoI68FGUMmUU8O5B/S7DlmGaeUP3f0rBT1bDDaDewE9dshlyHoZB5dBhcOco6wFfYzPdomgu0ahCbBFUOEOUGnJd5YRtTOXoONG5o+g2lLJSZL/J2iw5G9lRC3mBFUbmX6BKovzJYzzfsEQ7jPKDHGCHhuZNgkc1zOCxoTz6qpRbj8VtMZIvC50Gmcacsxhso8aczXpJ9wnCX/1kpU6TYKL4E7QUs5Bi9GYVvWyTO+ivnWEXNphGSF19yWwN24FcbJXdsXc7Ty4DXaFKEtPgialsJMofBuihQ+Nbm9zLF9Lp4vqoRqi8Jlj62r1VcQ8/1xsBEzo'+
			'52xCH4a+vXZ0Vh7L32bBkP8nYTgdd3Q2w7ybDiFqnAqaQxKysWgsSwVNkYT5EQkqpYI+k4R0RILSVNAYSVgdgZh5YAUVNEwSmyMQpK67Jfq5JKHDFLqMNxRYEN3dvytBT3Qs5duZAoqZC9rI/54Ec35t0wFgIey0sbJv+OdJlXEevRSeQw3MBe2VsKy6f2dJuQH13u8hFVddIkrVPDonCXyZd9K9rNfYlI9wcdnXXBEBQ6m+2FO7KegdM+brCoo6VjFDcEAwbINaWDdIWfLfMvy/s8VlBwOCRFuryyzpy8BTJrJJSyLXdkbUoGAIORboAHHK8PdNRy3irx97wb+AVXRKD29QMLAQNIErYJLxoeKwpWG+ftSBDFiX4x4zqn9n9NePRXofSwWU6QRH8/1gdVhPvnxMxW+NtrpsPUQtCXaD7aARFAvKTIIHoBs8l1TyX4'+
			'ABABjtKsVu/L2MAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Instrucoes desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._instrucoes_desktop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instrucoes_desktop.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._instrucoes_desktop.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instrucoes_desktop.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instrucoes_desktop.style.transition='';
				if (me._instrucoes_desktop.ggCurrentLogicStateVisible == 0) {
					me._instrucoes_desktop.style.visibility=(Number(me._instrucoes_desktop.style.opacity)>0||!me._instrucoes_desktop.style.opacity)?'inherit':'hidden';
					me._instrucoes_desktop.ggVisible=true;
				}
				else {
					me._instrucoes_desktop.style.visibility="hidden";
					me._instrucoes_desktop.ggVisible=false;
				}
			}
		}
		me._instrucoes_desktop.logicBlock_visible();
		me._instrucoes_desktop.onclick=function (e) {
			me._instrucoes_png_desktop.style.transition='none';
			me._instrucoes_png_desktop.style.visibility=(Number(me._instrucoes_png_desktop.style.opacity)>0||!me._instrucoes_png_desktop.style.opacity)?'inherit':'hidden';
			me._instrucoes_png_desktop.ggVisible=true;
		}
		me._instrucoes_desktop.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._instrucoes_desktop);
		el=me._instrucoes_mobile=document.createElement('div');
		els=me._instrucoes_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_instrucoes_mobile';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMENGN0ZCMTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMENGN0ZCMDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pik+i1oAAAL7SURBVHjaxJhLSFVBGMfvo9TyghmIYt2IDJEgg4yeiEgE7iIqexJBhVHYoseiFq2sNlFEK8nqRosIXIgEGUWPTegywULSCiHISntRqZc8/QfmwMfwnT'+
			'vfnAv3fPDjnntm5pv/vOc7cc/zYo5WAVrAerAcpEE5KAJ/wBfwAQyDF+ARkFeiBAlpBhnw23Oz96AD1EjqkQipAz1e/jYLLoCiXPXFLUN2AlwLSHsDBvTvJzANUnoI68FGUMmUU8O5B/S7DlmGaeUP3f0rBT1bDDaDewE9dshlyHoZB5dBhcOco6wFfYzPdomgu0ahCbBFUOEOUGnJd5YRtTOXoONG5o+g2lLJSZL/J2iw5G9lRC3mBFUbmX6BKovzJYzzfsEQ7jPKDHGCHhuZNgkc1zOCxoTz6qpRbj8VtMZIvC50Gmcacsxhso8aczXpJ9wnCX/1kpU6TYKL4E7QUs5Bi9GYVvWyTO+ivnWEXNphGSF19yWwN24FcbJXdsXc7Ty4DXaFKEtPgialsJMofBuihQ+Nbm9zLF9Lp4vqoRqi8Jlj62r1VcQ8/1xsBEzo'+
			'52xCH4a+vXZ0Vh7L32bBkP8nYTgdd3Q2w7ybDiFqnAqaQxKysWgsSwVNkYT5EQkqpYI+k4R0RILSVNAYSVgdgZh5YAUVNEwSmyMQpK67Jfq5JKHDFLqMNxRYEN3dvytBT3Qs5duZAoqZC9rI/54Ec35t0wFgIey0sbJv+OdJlXEevRSeQw3MBe2VsKy6f2dJuQH13u8hFVddIkrVPDonCXyZd9K9rNfYlI9wcdnXXBEBQ6m+2FO7KegdM+brCoo6VjFDcEAwbINaWDdIWfLfMvy/s8VlBwOCRFuryyzpy8BTJrJJSyLXdkbUoGAIORboAHHK8PdNRy3irx97wb+AVXRKD29QMLAQNIErYJLxoeKwpWG+ftSBDFiX4x4zqn9n9NePRXofSwWU6QRH8/1gdVhPvnxMxW+NtrpsPUQtCXaD7aARFAvKTIIHoBs8l1TyX4'+
			'ABABjtKsVu/L2MAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Instrucoes mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 7px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='opacity : 0.79999;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._instrucoes_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instrucoes_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._instrucoes_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._instrucoes_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._instrucoes_mobile.style.transition='';
				if (me._instrucoes_mobile.ggCurrentLogicStateVisible == 0) {
					me._instrucoes_mobile.style.visibility=(Number(me._instrucoes_mobile.style.opacity)>0||!me._instrucoes_mobile.style.opacity)?'inherit':'hidden';
					me._instrucoes_mobile.ggVisible=true;
				}
				else {
					me._instrucoes_mobile.style.visibility="hidden";
					me._instrucoes_mobile.ggVisible=false;
				}
			}
		}
		me._instrucoes_mobile.logicBlock_visible();
		me._instrucoes_mobile.onclick=function (e) {
			me._instrucoes_png_mobile.style.transition='none';
			me._instrucoes_png_mobile.style.visibility=(Number(me._instrucoes_png_mobile.style.opacity)>0||!me._instrucoes_png_mobile.style.opacity)?'inherit':'hidden';
			me._instrucoes_png_mobile.ggVisible=true;
		}
		me._instrucoes_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._instrucoes_mobile);
		el=me._instrucoes_png_mobile=document.createElement('div');
		els=me._instrucoes_png_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_instrucoes_png_mobile';
		hs=basePath + 'images/instrucoes_png_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="instrucoes png mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -418px;';
		hs+='height : 1080px;';
		hs+='position : absolute;';
		hs+='right : -863px;';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._instrucoes_png_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instrucoes_png_mobile.onclick=function (e) {
			me._instrucoes_png_mobile.style.transition='none';
			me._instrucoes_png_mobile.style.visibility='hidden';
			me._instrucoes_png_mobile.ggVisible=false;
		}
		me._instrucoes_png_mobile.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._instrucoes_png_mobile);
		el=me._instrucoes_png_desktop=document.createElement('div');
		els=me._instrucoes_png_desktop__img=document.createElement('img');
		els.className='ggskin ggskin_instrucoes_png_desktop';
		hs=basePath + 'images/instrucoes_png_desktop.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="instrucoes png desktop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : -300px;';
		hs+='height : 1080px;';
		hs+='position : absolute;';
		hs+='right : -714px;';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._instrucoes_png_desktop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._instrucoes_png_desktop.onclick=function (e) {
			me._instrucoes_png_desktop.style.transition='none';
			me._instrucoes_png_desktop.style.visibility='hidden';
			me._instrucoes_png_desktop.ggVisible=false;
		}
		me._instrucoes_png_desktop.ggUpdatePosition=function (useTransition) {
		}
		me._menu_lateral.appendChild(me._instrucoes_png_desktop);
		me.divSkin.appendChild(me._menu_lateral);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 24px;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((288px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 288px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_website') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_userdata') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					me._controller.style.left = 'calc(50% - (288px / 2))';
					me._controller.style.bottom='-100px';
				}
				else {
					me._controller.style.left='calc(50% - ((288px + 0px) / 2) + 0px)';
					me._controller.style.bottom='24px';
				}
			}
		}
		me._controller.logicBlock_position();
		me._controller.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller.style.transition='left 0s, bottom 0s, opacity 500ms ease 0ms';
				if (me._controller.ggCurrentLogicStateAlpha == 0) {
					me._controller.style.visibility=me._controller.ggVisible?'inherit':'hidden';
					me._controller.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller.style.opacity == 0.0) { me._controller.style.visibility="hidden"; } }, 505);
					me._controller.style.opacity=0;
				}
			}
		}
		me._controller.logicBlock_alpha();
		me._controller.onmouseenter=function (e) {
			me.elementMouseOver['controller']=true;
		}
		me._controller.onmouseleave=function (e) {
			me.elementMouseOver['controller']=false;
		}
		me._controller.ggCurrentLogicStatePosition = -1;
		me._controller.ggCurrentLogicStateAlpha = -1;
		me._controller.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['controller']) {
				if (
					(
						((player.getVariableValue('opt_autohide', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
					)
				) {
				}
			}
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._controller_bg=document.createElement('div');
		el.ggId="controller_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(63,63,63,0.498039);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 3px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 306px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_bg.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("8")))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_bg.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_bg.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStatePosition == 0) {
					me._controller_bg.style.left='103px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 1) {
					me._controller_bg.style.left='87px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 2) {
					me._controller_bg.style.left='71px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 3) {
					me._controller_bg.style.left='55px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 4) {
					me._controller_bg.style.left='39px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 5) {
					me._controller_bg.style.left='23px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 6) {
					me._controller_bg.style.left='7px';
					me._controller_bg.style.top='-9px';
				}
				else if (me._controller_bg.ggCurrentLogicStatePosition == 7) {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
				else {
					me._controller_bg.style.left='-9px';
					me._controller_bg.style.top='-9px';
				}
			}
		}
		me._controller_bg.logicBlock_position();
		me._controller_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStateSize = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStateSize = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStateSize = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStateSize = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStateSize = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStateSize = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("8")))
			)
			{
				newLogicStateSize = 7;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._controller_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateSize == 0) {
					me._controller_bg.style.width='82px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 1) {
					me._controller_bg.style.width='114px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 2) {
					me._controller_bg.style.width='146px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 3) {
					me._controller_bg.style.width='178px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 4) {
					me._controller_bg.style.width='210px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 5) {
					me._controller_bg.style.width='242px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 6) {
					me._controller_bg.style.width='274px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else if (me._controller_bg.ggCurrentLogicStateSize == 7) {
					me._controller_bg.style.width='306px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
				else {
					me._controller_bg.style.width='306px';
					me._controller_bg.style.height='50px';
					skin.updateSize(me._controller_bg);
				}
			}
		}
		me._controller_bg.logicBlock_size();
		me._controller_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('pos_controller') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller_bg.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._controller_bg.ggCurrentLogicStateVisible == 0) {
					me._controller_bg.style.visibility="hidden";
					me._controller_bg.ggVisible=false;
				}
				else {
					me._controller_bg.style.visibility=(Number(me._controller_bg.style.opacity)>0||!me._controller_bg.style.opacity)?'inherit':'hidden';
					me._controller_bg.ggVisible=true;
				}
			}
		}
		me._controller_bg.logicBlock_visible();
		me._controller_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._controller_bg);
		el=me._controller_slider=document.createElement('div');
		el.ggId="controller_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_controller') == Number("1")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("2")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("3")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("4")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("5")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("6")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("7")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("8")))
			)
			{
				newLogicStatePosition = 7;
			}
			else if (
				((player.getVariableValue('pos_controller') == Number("9")))
			)
			{
				newLogicStatePosition = 8;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller_slider.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStatePosition == 0) {
					me._controller_slider.style.left='128px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 1) {
					me._controller_slider.style.left='112px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 2) {
					me._controller_slider.style.left='96px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 3) {
					me._controller_slider.style.left='80px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 4) {
					me._controller_slider.style.left='64px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 5) {
					me._controller_slider.style.left='48px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 6) {
					me._controller_slider.style.left='32px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 7) {
					me._controller_slider.style.left='16px';
					me._controller_slider.style.top='0px';
				}
				else if (me._controller_slider.ggCurrentLogicStatePosition == 8) {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
				else {
					me._controller_slider.style.left='0px';
					me._controller_slider.style.top='0px';
				}
			}
		}
		me._controller_slider.logicBlock_position();
		me._controller_slider.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._controller_slider.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._controller_slider.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._controller_slider.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._controller_slider.ggCurrentLogicStateAlpha == 0) {
					me._controller_slider.style.visibility=me._controller_slider.ggVisible?'inherit':'hidden';
					me._controller_slider.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._controller_slider.style.opacity == 0.0) { me._controller_slider.style.visibility="hidden"; } }, 505);
					me._controller_slider.style.opacity=0;
				}
			}
		}
		me._controller_slider.logicBlock_alpha();
		me._controller_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik04Ny41LDQ0LjhINDIuNWMtNi43LDAtMTAuNCwxLjItMTIuNCw0Yy0yLjMsMy4yLTIuNCw4LjQtMi40LDE2LjVjMCwxMS4xLDIsMTYuNiwzLjksMTguMWMyLjgsMi4xLDMuNSwyLjUsOCwyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzQsMCw1LjgtMC44LDguMS0xLjdjMy4yLTEuMyw3LjItMywxNy40LTNjMTAuNCwwLDE0LjMsMS43LDE3LjUsM2MyLjIsMC45LDQsMS43LDcuOSwxLjdjNC41LDAsNS4yLTAuMyw4LTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtjMS45LTEuNCwzLjktNi45LDMuOS0xOC4xYzAtOC4yLTAuMi0xMy40LTIuNC0xNi41Qzk3LjksNDYsOTQuMiw0NC44LDg3LjUsNDQuOHogTTQ2LjksNzMuM2MtNS4zLDAtOS42LTQuMy05LjYtOS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTUuMyw0LjMtOS42LDkuNi05LjZjNS4zLDAsOS42LDQuMyw5LjYsOS42UzUyLjEsNzMuMyw0Ni45LDczLjN6IE04MC44LDczLjNjLTUuMywwLTkuNi00LjMtOS42LTkuNmMwLTUuMyw0LjMtOS42LDkuNi05LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzUuMywwLDkuNiw0LjMsOS42LDkuNlM4Ni4xLDczLjMsODAuOCw3My4zeiIvPgogIC'+
			'A8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSw5QzM0LDksOC45LDM0LjEsOC45LDY1LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjFDMTIxLjEsMzQuMSw5Niw5LDY1LDl6IE01Ni45LDI1LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC40LDAuMi0wLjgsMC42LTEuMmMwLjQtMC40LDAuOC0wLjYsMS40LTAuNmgxMi4zYzEuNCwwLDIsMC42LDIsMS44djEySDU2LjlWMjUuN3ogTTEwMS44LDg3LjdjLTMuOSwzLTUuOCwzLjYtMTEuMywzLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LDAtNy42LTEuMS0xMC0yLjFj'+
			'LTIuOS0xLjItNi4xLTIuNi0xNS40LTIuNmMtOS4xLDAtMTIuNCwxLjQtMTUuMywyLjZjLTIuNSwxLTUuMSwyLjEtMTAuMiwyLjFjLTUuNiwwLTcuNS0wLjYtMTEuMy0zLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjktMy44LTYtMTQuMi02LTIyLjNjMC05LjMsMC4yLTE1LjIsMy40LTE5LjdjMy45LTUuNSwxMS02LjIsMTYuOC02LjJoNDUuMWM1LjcsMCwxMi44LDAuNywxNi44LDYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMy4yLDQuNSwzLjUsMTAuNCwzLjUsMTkuN0MxMDcuNyw3My40LDEwNi43LDgzLjksMTAxLjgsODcuN3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbG'+
			'wtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTEwNC4zLDQ1LjZjLTMuOS01LjUtMTEtNi4yLTE2LjgtNi4ySDQyLjVjLTUuNywwLTEyLjgsMC43LTE2LjgsNi4yYy0zLjIsNC41LTMuNCwxMC40LTMuNCwxOS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDguMSwxLDE4LjUsNiwyMi4zYzMuOSwzLDUuOCwzLjYsMTEuMywzLjZjNS4xLDAsNy42LTEuMSwxMC4yLTIuMWMyLjktMS4yLDYuMi0yLjYsMTUuMy0yLjZjOS4zLDAsMTIuNSwxLjQsMTUuNCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNSwxLDUsMi4xLDEwLDIuMWM1LjYsMCw3LjUtMC42LDExLjMtMy42YzQuOS0z'+
			'LjgsNi0xNC4yLDYtMjIuM0MxMDcuNyw1Ni4xLDEwNy41LDUwLjEsMTA0LjMsNDUuNnogTTk4LjUsODMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuOCwyLjEtMy41LDIuNS04LDIuNWMtMy45LDAtNS43LTAuNy03LjktMS43Yy0zLjItMS4zLTcuMS0zLTE3LjUtM2MtMTAuMSwwLTE0LjEsMS43LTE3LjQsM2MtMi4zLDEtNC4xLDEuNy04LjEsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC41LDAtNS4yLTAuMy04LTIuNWMtMS45LTEuNC0zLjktNi45LTMuOS0xOC4xYzAtOC4yLDAuMi0xMy40LDIuNC0xNi41YzItMi44LDUuNy00LDEyLjQtNGg0NS4xYzYuNywwLDEwLjQsMS4yLD'+
			'EyLjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi4zLDMuMiwyLjQsOC40LDIuNCwxNi41QzEwMi4zLDc2LjQsMTAwLjMsODEuOSw5OC41LDgzLjR6Ii8+CiAgIDxjaXJjbGUgY3k9IjYzLjgiIGN4PSI0Ni45IiByPSI5LjYiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIvPgogICA8Y2lyY2xlIGN5PSI2My44IiBjeD0iODAuOCIgcj0iOS42IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNzMuMSwyNS43YzAtMS4yLTAuNi0xLjgtMi0xLjhINTguOWMtMC42LDAtMSwwLjItMS40LDAu'+
			'NmMtMC40LDAuNC0wLjYsMC44LTAuNiwxLjJ2MTJoMTYuMkw3My4xLDI1LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TDczLjEsMjUuN3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._enter_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._enter_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEzMHB4Ii'+
			'B4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgdmVyc2lvbj0iMS4xIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgaGVpZ2h0PSIxMzBweCIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMzAgMTMwIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIGlkPSJMYXll'+
			'cl8xIi8+CiA8ZyBpZD0iTGF5ZXJfMiIvPgogPGcgaWQ9IkViZW5lXzEiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik05MC4wMjgsNDIuNTcxSDM5Ljk3MWMtNy40MzUsMC0xMS41NDcsMS4zMTYtMTMuNzUzLDQuNGMtMi41MjgsMy41MzQtMi43MTEsOS4zMDItMi43MTEsMTguMzgyJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDEyLjM1NSwyLjIyNCwxOC40NjksNC4zMDUsMjAuMDdjMy4wOTcsMi4zODQsMy44NzQsMi43MjcsOC45MTcsMi43MjdjNC40MTYsMCw2LjQzMS0wLjgzNyw4Ljk4MS0xLjg5OCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OT'+
			'tjMy41NzMtMS40ODYsOC4wMjEtMy4zMzUsMTkuMjktMy4zMzVjMTEuNTI4LDAsMTUuOTMsMS44NjMsMTkuNDY2LDMuMzYxYzIuNDcyLDEuMDQ2LDQuNDIzLDEuODczLDguODAyLDEuODczJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M1LjA0NCwwLDUuODIxLTAuMzQzLDguOTE5LTIuNzI3YzIuMDgyLTEuNjAyLDQuMzA3LTcuNzE2LDQuMzA3LTIwLjA3YzAtOS4wNzgtMC4xODMtMTQuODQ0LTIuNzE0LTE4LjM4MSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTAxLjU3Miw0My44ODcsOTcuNDYsNDIuNTcxLDkwLjAyOCw0Mi41NzF6IE00NC44NCw3NC4yNDZjLTUuODcxLDAtMTAuNjI3LTQuNzU2'+
			'LTEwLjYyNy0xMC42MjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtNS44NjksNC43NTYtMTAuNjI2LDEwLjYyNy0xMC42MjZjNS44NjksMCwxMC42MjUsNC43NTcsMTAuNjI1LDEwLjYyNkM1NS40NjUsNjkuNDg5LDUwLjcwOSw3NC4yNDYsNDQuODQsNzQuMjQ2eiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsgTTgyLjU1MSw3NC4yNDZjLTUuODcsMC0xMC42MjYtNC43NTYtMTAuNjI2LTEwLjYyNmMwLTUuODY5LDQuNzU2LTEwLjYyNiwxMC42MjYtMTAuNjI2YzUuODY5LDAsMTAuNjI2LDQuNzU3LDEwLjYyNiwxMC42MjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzkzLjE3Nyw2OS40ODksOD'+
			'guNDIsNzQuMjQ2LDgyLjU1MSw3NC4yNDZ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTTY0Ljk5OSwyLjczN0MzMC41NTgsMi43MzcsMi42MzgsMzAuNjU2LDIuNjM4LDY1LjFjMCwzNC40NDEsMjcuOTIsNjIuMzYyLDYyLjM2MSw2Mi4zNjJzNjIuMzYzLTI3LjkyLDYyLjM2My02Mi4zNjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEyNy4zNjIsMzAuNjU2LDk5LjQ0LDIuNzM3LDY0Ljk5OSwyLjczN3ogTTU1Ljk3NCwyMS4yODVjMC0wLjQ0LDAuMjItMC44OCwwLjY1OS0xLjMyMWMwLjQ0MS0wLjQ0LDAuODgyLTAuNjYsMS41NDEtMC42NmgxMy42NSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41NCwwLDIuMjAxLDAuNjYsMi4yMDEsMS45OHYxMy4yODZINTUuOTc0VjIxLjI4NXogTTEwNS44NDYsOTAuMTc4Yy00LjI5MiwzLjMwNC02LjQwOCwzLjk3Mi0xMi41NzgsMy45NzImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjU5NywwLTguNDE1LTEuMTkzLTExLjE0MS0yLjM0N0M3OC45MzIsOTAuNDUsNzUuMzEsODguOTE3LDY1LDg4LjkxN2MtMTAuMDcxLDAtMTMuNzQ1LDEuNTI4LTE2Ljk4NiwyLjg3NSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNzg4LDEuMTU5LTUuNjcxLDIuMzU4LTExLjI4NSwyLjM1OGMtNi4xNywwLTguMjg1LT'+
			'AuNjY4LTEyLjU3Ny0zLjk3M2MtNS40OTItNC4yMjctNi42NDUtMTUuODMzLTYuNjQ1LTI0LjgyNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xMC4yNzgsMC4yNTgtMTYuODc5LDMuODMxLTIxLjg3M2M0LjM4LTYuMTI0LDEyLjI1OS02LjkwOSwxOC42MzMtNi45MDloNTAuMDU4YzYuMzcyLDAsMTQuMjQ4LDAuNzg1LDE4LjYzLDYuOTA5JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjU3Nyw0Ljk5OCwzLjgzNSwxMS41OTcsMy44MzUsMjEuODczQzExMi40OTMsNzQuMzQ1LDExMS4zNCw4NS45NTEsMTA1Ljg0Niw5MC4xNzh6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNp'+
			'dHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMDguNjU4LDQzLjQ4Yy00LjM4Mi02LjEyNC0xMi4yNTgtNi45MDktMTguNjMtNi45MDlIMzkuOTcxYy02LjM3NCwwLTE0LjI1MywwLjc4NS0xOC42MzMsNi45MDkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0zLjU3Myw0Ljk5NC0zLjgzMSwxMS41OTUtMy44MzEsMjEuODczYzAsOC45OTIsMS4xNTIsMjAuNTk4LDYuNjQ1LDI0LjgyNWM0LjI5MiwzLjMwNCw2LjQwNywzLjk3MywxMi41NzcsMy45NzMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzUuNjE0LDAsOC40OTctMS4xOTksMTEuMjg1LTIuMzU4YzMuMjQxLTEuMzQ4LDYuOTE1LTIuODc1LD'+
			'E2Ljk4Ni0yLjg3NWMxMC4zMSwwLDEzLjkzMiwxLjUzMywxNy4xMjcsMi44ODYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNzI2LDEuMTU0LDUuNTQ0LDIuMzQ3LDExLjE0MSwyLjM0N2M2LjE3LDAsOC4yODYtMC42NjgsMTIuNTc4LTMuOTcyYzUuNDk0LTQuMjI4LDYuNjQ3LTE1LjgzMyw2LjY0Ny0yNC44MjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzExMi40OTMsNTUuMDc3LDExMi4yMzUsNDguNDc4LDEwOC42NTgsNDMuNDh6IE0xMDIuMTg3LDg1LjQyM2MtMy4wOTgsMi4zODQtMy44NzUsMi43MjctOC45MTksMi43MjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjM3OSwwLTYu'+
			'MzMtMC44MjYtOC44MDItMS44NzNDODAuOTMsODQuNzgsNzYuNTI4LDgyLjkxNyw2NSw4Mi45MTdjLTExLjI3LDAtMTUuNzE3LDEuODUtMTkuMjksMy4zMzUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0yLjU1MSwxLjA2MS00LjU2NSwxLjg5OC04Ljk4MSwxLjg5OGMtNS4wNDMsMC01LjgyLTAuMzQzLTguOTE3LTIuNzI3Yy0yLjA4MS0xLjYwMi00LjMwNS03LjcxNS00LjMwNS0yMC4wNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC05LjA4LDAuMTgzLTE0Ljg0OCwyLjcxMS0xOC4zODJjMi4yMDYtMy4wODQsNi4zMTgtNC40LDEzLjc1My00LjRoNTAuMDU4YzcuNDMyLDAsMTEuNTQ0LDEuMz'+
			'E2LDEzLjc1MSw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNTMxLDMuNTM3LDIuNzE0LDkuMzA0LDIuNzE0LDE4LjM4MUMxMDYuNDkzLDc3LjcwOCwxMDQuMjY5LDgzLjgyMSwxMDIuMTg3LDg1LjQyM3oiLz4KICAgPGNpcmNsZSBjeT0iNjMuNjE5IiBjeD0iNDQuODQiIHI9IjEwLjYyNiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiAgIDxjaXJjbGUgY3k9IjYzLjYxOSIgY3g9IjgyLjU1MSIgcj0iMTAuNjI2IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNzQuMDI1LDIx'+
			'LjI4NWMwLTEuMzIxLTAuNjYxLTEuOTgtMi4yMDEtMS45OGgtMTMuNjVjLTAuNjU5LDAtMS4xLDAuMjE5LTEuNTQxLDAuNjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjQzOSwwLjQ0MS0wLjY1OSwwLjg4LTAuNjU5LDEuMzIxdjEzLjI4NmgxOC4wNTJWMjEuMjg1eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._enter_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 256px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_enter_vr') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("6")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_enter_vr') == Number("7")))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._enter_vr.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._enter_vr.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._enter_vr.style.transition='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStatePosition == 0) {
					me._enter_vr.style.left='0px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 1) {
					me._enter_vr.style.left='32px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 2) {
					me._enter_vr.style.left='64px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 3) {
					me._enter_vr.style.left='96px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 4) {
					me._enter_vr.style.left='128px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 5) {
					me._enter_vr.style.left='160px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 6) {
					me._enter_vr.style.left='192px';
					me._enter_vr.style.top='0px';
				}
				else if (me._enter_vr.ggCurrentLogicStatePosition == 7) {
					me._enter_vr.style.left='224px';
					me._enter_vr.style.top='0px';
				}
				else {
					me._enter_vr.style.left='256px';
					me._enter_vr.style.top='0px';
				}
			}
		}
		me._enter_vr.logicBlock_position();
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style.transition='left 0s, top 0s';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.logicBlock_visible();
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.onmouseenter=function (e) {
			me._enter_vr__img.style.visibility='hidden';
			me._enter_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['enter_vr']=true;
		}
		me._enter_vr.onmouseleave=function (e) {
			me._enter_vr__img.style.visibility='inherit';
			me._enter_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['enter_vr']=false;
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._enter_vr);
		el=me._fullscreen_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="fullscreen_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 224px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_fullscreen') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("6")))
			)
			{
				newLogicStatePosition = 6;
			}
			else if (
				((player.getVariableValue('pos_fullscreen') == Number("7")))
			)
			{
				newLogicStatePosition = 7;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._fullscreen_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._fullscreen_buttons.style.transition='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 0) {
					me._fullscreen_buttons.style.left='0px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 1) {
					me._fullscreen_buttons.style.left='32px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 2) {
					me._fullscreen_buttons.style.left='64px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 3) {
					me._fullscreen_buttons.style.left='96px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 4) {
					me._fullscreen_buttons.style.left='128px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 5) {
					me._fullscreen_buttons.style.left='160px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 6) {
					me._fullscreen_buttons.style.left='192px';
					me._fullscreen_buttons.style.top='0px';
				}
				else if (me._fullscreen_buttons.ggCurrentLogicStatePosition == 7) {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
				else {
					me._fullscreen_buttons.style.left='224px';
					me._fullscreen_buttons.style.top='0px';
				}
			}
		}
		me._fullscreen_buttons.logicBlock_position();
		me._fullscreen_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_fullscreen', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
				((player.getOS() != 4))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_buttons.style.transition='left 0s, top 0s';
				if (me._fullscreen_buttons.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_buttons.style.visibility=(Number(me._fullscreen_buttons.style.opacity)>0||!me._fullscreen_buttons.style.opacity)?'inherit':'hidden';
					me._fullscreen_buttons.ggVisible=true;
				}
				else {
					me._fullscreen_buttons.style.visibility="hidden";
					me._fullscreen_buttons.ggVisible=false;
				}
			}
		}
		me._fullscreen_buttons.logicBlock_visible();
		me._fullscreen_buttons.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTS0yMDYuMiw0MTkuMmg2Mi4zdi00NC4zaC02Mi4zVjQxOS4yeiBNLTE3OC45LDM5Ny4zYzAsMCwxNy43LTEyLjcsMTcuNy0xMi43bC00LTUuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45YzAuMi0wLjQsMC41LTAuNSwwLjgtMC41bDE2LjItMC4xYzAuNCwwLDAuNiwwLjEsMC44LDAuNGMwLjIsMC4yLDAuMiwwLjUsMC4xLDAuOGwtNS4yLDE1LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjEsMC4zLTAuNCwwLjYtMC44LDAuNmMtMC40'+
			'LDAtMC43LTAuMS0wLjktMC4zbC0zLjktNS40YzAsMC0xNy43LDEyLjctMTcuNywxMi43Yy0wLjcsMC41LTEuNiwwLjMtMi4xLTAuNGwtMS40LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OS43LDM5OC44LTE3OS41LDM5Ny44LTE3OC45LDM5Ny4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTEzOC40LDQyMC'+
			'4zYzAsMi4zLTEuOSw0LjItNC4yLDQuMmgtNjQuN2MtMi4zLDAtNC4yLTEuOS00LjItNC4ydi00Ni43YzAtMi4zLDEuOS00LjIsNC4yLTQuMmg2NC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjMsMCw0LjIsMS45LDQuMiw0LjJWNDIwLjN6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNDcuNCwzNzcuOWMtMC4yLTAuMy0wLjQtMC40LTAuOC0wLjRsLTE2LjIsMC4xYy0wLjQsMC0wLjcsMC4xLTAuOCwwLjVjLTAuMiwwLjQtMC4yLDAuNiwwLjEsMC45bDQsNS42JiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjLTAuMSwwLTE3LjcsMTIuNy0xNy43LDEyLjdjLTAuNywwLjUtMC44LDEuNS0wLjQsMi4xbDEuNCwxLjljMC41LDAuNywxLjUsMC44LDIuMSwwLjRjMCwwLDE3LjYtMTIuNywxNy43LTEyLjdsMy45LDUuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC40LDAuNCwwLjksMC4zYzAuNCwwLDAuNy0wLjMsMC44LTAuNmw1LjItMTUuNEMtMTQ3LjIsMzc4LjQtMTQ3LjIsMzc4LjEtMTQ3LjQsMzc3Ljl6Ii8+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE0Mi43LDQyNC42aC02NC43Yy0yLjMsMC00LjItMS45LTQuMi00LjJ2LTQ2LjdjMC0yLjMsMS45LT'+
			'QuMiw0LjItNC4yaDY0LjdjMi4zLDAsNC4yLDEuOSw0LjIsNC4ydjQ2LjcmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTM4LjQsNDIyLjctMTQwLjMsNDI0LjYtMTQyLjcsNDI0LjZ6IE0tMjA2LjIsNDE5LjJoNjIuM3YtNDQuM2gtNjIuM1Y0MTkuMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTS0yMDkuNiw0MjEuNmg2OS4zdi00OS4zaC02OS4zVjQyMS42eiBNLTE3OS4zLDM5Ny40YzAsMCwxOS42LTE0LjEsMTkuNy0xNC4xbC00LjUtNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4yLTAuMy0wLjItMC42LTAuMS0xYzAuMi0wLjQsMC41LTAuNiwwLjktMC42bDE4LTAuMWMwLjQsMCwwLjcsMC4xLDAuOSwwLjRjMC4yLDAuMywwLjIsMC41LDAuMSwwLjlsLTUuOCwxNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAuNC0wLjQsMC43LTAuOCwwLjdjLTAuNSww'+
			'LTAuNy0wLjEtMS0wLjRsLTQuMy02Yy0wLjEsMC4xLTE5LjcsMTQuMS0xOS43LDE0LjFjLTAuOCwwLjUtMS44LDAuNC0yLjQtMC40bC0xLjUtMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTgwLjIsMzk5LTE4MCwzOTcuOS0xNzkuMywzOTcuNHoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtTLTE0MC42LDMzNC42LTE3NSwzMzQuNnogTS0xMzQuNCw0Mj'+
			'IuOWMwLDIuNi0yLjEsNC43LTQuNyw0LjdoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy00LjdoNzEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDAsNC43LDIuMSw0LjcsNC43VjQyMi45eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTQ0LjMsMzc1LjhjLTAuMi0wLjMtMC41LTAuNC0wLjktMC40bC0xOCwwLjFjLTAuNCwwLTAuOCwwLjItMC45LDAuNmMtMC4yLDAuNC0wLjIsMC43LDAuMSwxbDQuNSw2LjImI3hkOyYjeGE7JiN4OTsmI3g5'+
			'O2MtMC4xLDAtMTkuNywxNC4xLTE5LjcsMTQuMWMtMC44LDAuNS0wLjksMS42LTAuNCwyLjRsMS41LDIuMWMwLjUsMC44LDEuNiwwLjksMi40LDAuNGMwLDAsMTkuNi0xNC4xLDE5LjctMTQuMWw0LjMsNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjMsMC41LDAuNCwxLDAuNGMwLjUsMCwwLjctMC4zLDAuOC0wLjdsNS44LTE3LjFDLTE0NC4xLDM3Ni4zLTE0NC4xLDM3Ni0xNDQuMywzNzUuOHoiLz4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTM5LjEsNDI3LjZoLTcxLjhjLTIuNiwwLTQuNy0yLjEtNC43LTQuN3YtNTEuOGMwLTIuNiwyLjEtNC43LDQuNy'+
			'00LjdoNzEuOGMyLjYsMCw0LjcsMi4xLDQuNyw0Ljd2NTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzQuNCw0MjUuNS0xMzYuNSw0MjcuNi0xMzkuMSw0MjcuNnogTS0yMDkuNiw0MjEuNmg2OS4zdi00OS4zaC02OS4zVjQyMS42eiIvPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._fullscreen.style.opacity == 0.0) { me._fullscreen.style.visibility="hidden"; } }, 505);
					me._fullscreen.style.opacity=0;
				}
				else {
					me._fullscreen.style.visibility=me._fullscreen.ggVisible?'inherit':'hidden';
					me._fullscreen.style.opacity=1;
				}
			}
		}
		me._fullscreen.logicBlock_alpha();
		me._fullscreen.onmouseenter=function (e) {
			me._fullscreen__img.style.visibility='hidden';
			me._fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen']=true;
		}
		me._fullscreen.onmouseleave=function (e) {
			me._fullscreen__img.style.visibility='inherit';
			me._fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen']=false;
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen);
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzMi4xIiBoZWlnaHQ9IjIyLjIiIHg9Ii0yMDYuMiIgeT0iMzk3IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xYzAsMzEsMjUuMSw1Ni4xLDU2LjEsNTYuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNjguNiw0MjAuM2MwLDIuMy0xLjksNC4yLTQuMiw0LjJoLTM0LjVj'+
			'LTIuMywwLTQuMi0xLjktNC4yLTQuMnYtMjQuNWMwLTIuMywxLjktNC4yLDQuMi00LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7aDM0LjVjMi4zLDAsNC4yLDEuOSw0LjIsNC4yTC0xNjguNiw0MjAuM0wtMTY4LjYsNDIwLjN6IE0tMTM2LjgsMzcyLjZsLTE3LjUsMTIuNmMtMC4xLDAtMC4xLDAuMS0wLjIsMC4xbDAuNywwLjlsMy4zLDQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4yLDAuMywwLjIsMC41LDAuMSwwLjljLTAuMiwwLjQtMC41LDAuNS0wLjgsMC41bC0xNi4yLDAuMWMtMC40LDAtMC42LTAuMS0wLjgtMC40Yy0wLjItMC4yLTAuMi0wLjUtMC4xLTAuOGw1LjItMTUuNCYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4xLTAuMywwLjQtMC42LDAuOC0wLjZjMC40LDAsMC43LDAuMSwwLjksMC4zbDMuMyw0LjZsMC42LDAuOGMwLDAsMC4xLTAuMSwwLjEtMC4xbDE3LjUtMTIuNmMwLjctMC41LDEuNi0wLjMsMi4xLDAuNGwxLjQsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTM1LjksMzcxLjItMTM2LjEsMzcyLjEtMTM2LjgsMzcyLjZ6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTM2LjQsMzcwLjVsLTEuNC0xLjljLTAuNS0wLjctMS41LTAuOC0yLjEt'+
			'MC40bC0xNy41LDEyLjZjLTAuMSwwLTAuMSwwLjEtMC4xLDAuMWwtMC42LTAuOGwtMy4zLTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMi0wLjMtMC40LTAuNC0wLjktMC4zYy0wLjQsMC0wLjcsMC4zLTAuOCwwLjZsLTUuMiwxNS40Yy0wLjEsMC4zLTAuMSwwLjYsMC4xLDAuOGMwLjIsMC4zLDAuNCwwLjQsMC44LDAuNGwxNi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LTAuMSwwLjgtMC41YzAuMi0wLjQsMC4yLTAuNi0wLjEtMC45bC0zLjMtNC43bC0wLjctMC45YzAuMSwwLDAuMS0wLjEsMC4yLTAuMWwxNy41LTEyLjYmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7Qy0xMzYuMSwzNzIuMS0xMzUuOSwzNzEuMi0xMzYuNCwzNzAuNXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE3Mi44LDM5MS42aC0zNC41Yy0yLjMsMC00LjIsMS45LTQuMiw0LjJ2MjQuNWMwLDIuMywxLjksNC4yLDQuMiw0LjJoMzQuNWMyLjMsMCw0LjItMS45LDQuMi00LjJ2LTI0LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjguNiwzOTMuNS0xNzAuNSwzOTEuNi0xNzIuOCwzOTEuNnogTS0xNzQsNDE5LjJoLTMyLjFWMzk3aDMyLjFWNDE5LjJ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxyZWN0IHdpZHRoPSIzNS43IiBoZWlnaHQ9IjI0LjYiIHg9Ii0yMDkuNiIgeT0iMzk3IiBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNi0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTY3LjksNDIyLjljMCwyLjYtMi4xLDQuNy00Ljcs'+
			'NC43aC0zOC4zYy0yLjYsMC00LjctMi4xLTQuNy00Ljd2LTI3LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMi42LDIuMS00LjcsNC43LTQuN2gzOC4zYzIuNiwwLDQuNywyLjEsNC43LDQuN0wtMTY3LjksNDIyLjlMLTE2Ny45LDQyMi45eiBNLTEzMi41LDM2OS45bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDAuNywxbDMuNyw1LjJjMC4yLDAuMywwLjIsMC42LDAuMSwxYy0wLjIsMC40LTAuNSwwLjYtMC45LDAuNmwtMTgsMC4xYy0wLjQsMC0wLjctMC4xLTAuOS0wLjRjLTAuMi0wLjMtMC4yLTAuNS0wLjEtMC45JiN4ZDsmI3hhOy'+
			'YjeDk7JiN4OTsmI3g5O2w1LjgtMTcuMWMwLjEtMC40LDAuNC0wLjcsMC44LTAuN2MwLjUsMCwwLjcsMC4xLDEsMC40bDMuNiw1LjFsMC43LDAuOWMwLjEsMCwwLjEtMC4xLDAuMi0wLjFsMTkuNS0xNGMwLjgtMC41LDEuOC0wLjQsMi40LDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS41LDIuMUMtMTMxLjYsMzY4LjMtMTMxLjgsMzY5LjQtMTMyLjUsMzY5Ljl6Ii8+CiAgPC9nPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTMyLjEsMzY3LjVsLTEuNS0yLjFjLTAuNS0wLjgtMS42LTAuOS0yLjQt'+
			'MC40bC0xOS41LDE0Yy0wLjEsMC0wLjEsMC4xLTAuMiwwLjFsLTAuNy0wLjlsLTMuNi01LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjItMC4zLTAuNS0wLjQtMS0wLjRjLTAuNSwwLTAuNywwLjMtMC44LDAuN2wtNS44LDE3LjFjLTAuMSwwLjQtMC4xLDAuNywwLjEsMC45YzAuMiwwLjMsMC41LDAuNCwwLjksMC40bDE4LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC44LTAuMiwwLjktMC42YzAuMi0wLjQsMC4yLTAuNy0wLjEtMWwtMy43LTUuMmwtMC43LTFjMC4xLDAsMC4xLTAuMSwwLjItMC4xbDE5LjUtMTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuOC'+
			'wzNjkuNC0xMzEuNiwzNjguMy0xMzIuMSwzNjcuNXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE3Mi42LDM5MWgtMzguM2MtMi42LDAtNC43LDIuMS00LjcsNC43djI3LjJjMCwyLjYsMi4xLDQuNyw0LjcsNC43aDM4LjNjMi42LDAsNC43LTIuMSw0LjctNC43di0yNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTY3LjksMzkzLjEtMTcwLDM5MS0xNzIuNiwzOTF6IE0tMTczLjksNDIxLjZoLTM1LjdWMzk3aDM1LjdWNDIxLjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_off.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_off.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_off.style.visibility=me._fullscreen_off.ggVisible?'inherit':'hidden';
					me._fullscreen_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_off.style.opacity == 0.0) { me._fullscreen_off.style.visibility="hidden"; } }, 505);
					me._fullscreen_off.style.opacity=0;
				}
			}
		}
		me._fullscreen_off.logicBlock_alpha();
		me._fullscreen_off.onmouseenter=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_off']=true;
		}
		me._fullscreen_off.onmouseleave=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_off']=false;
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_buttons.appendChild(me._fullscreen_off);
		me._controller_slider.appendChild(me._fullscreen_buttons);
		el=me._gyro=document.createElement('div');
		el.ggId="gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 192px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_gyro') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("5")))
			)
			{
				newLogicStatePosition = 5;
			}
			else if (
				((player.getVariableValue('pos_gyro') == Number("6")))
			)
			{
				newLogicStatePosition = 6;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._gyro.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._gyro.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._gyro.style.transition='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStatePosition == 0) {
					me._gyro.style.left='0px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 1) {
					me._gyro.style.left='32px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 2) {
					me._gyro.style.left='64px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 3) {
					me._gyro.style.left='96px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 4) {
					me._gyro.style.left='128px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 5) {
					me._gyro.style.left='160px';
					me._gyro.style.top='0px';
				}
				else if (me._gyro.ggCurrentLogicStatePosition == 6) {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
				else {
					me._gyro.style.left='192px';
					me._gyro.style.top='0px';
				}
			}
		}
		me._gyro.logicBlock_position();
		me._gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_gyro', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro.style.transition='left 0s, top 0s';
				if (me._gyro.ggCurrentLogicStateVisible == 0) {
					me._gyro.style.visibility=(Number(me._gyro.style.opacity)>0||!me._gyro.style.opacity)?'inherit':'hidden';
					me._gyro.ggVisible=true;
				}
				else {
					me._gyro.style.visibility="hidden";
					me._gyro.ggVisible=false;
				}
			}
		}
		me._gyro.logicBlock_visible();
		me._gyro.onclick=function (e) {
			player.stopAutorotate();
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNMTAzLjUsNTkuNGMtMS45LTEuOS00LjktMy44LTguNi01LjRjLTQuMS0xLjgtOS4yLTMuMi0xNC45LTQuMWMxLjIsMy42LDIuMyw3LjUsMy4xLDExLjZjMS4xLDUuNiwxLjYsMTEsMS43LDE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMC4xLTAuOSwwLjItMS40LDAuM2MtMSwwLjItMiwwLjQtMy4xLDAuNmMwLTAuMSwwLTAuMywwLTAuNGMwLTQuOC0wLjUtMTAuMS0xLjYtMTUuNWMtMC45LTQuNy0y'+
			'LjItOS4xLTMuNy0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy4yLTAuMy02LjUtMC41LTEwLTAuNWwtMC45LTQuNWMwLjMsMCwwLjYsMCwwLjksMGMyLjcsMCw1LjQsMC4xLDgsMC4zYy0yLjEtNC40LTQuNC04LjEtNi44LTEwLjZjLTEuNy0xLjgtMy40LTMtNC44LTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNy0wLjMtMS4zLTAuNC0xLjktMC41bDYuOSwzNC45bDIuOSwxNC43Yy0wLjksMC0xLjgsMC4xLTIuNywwLjFsLTIuOC0xNC4ybC02LjktMzQuOWMtMC42LDAuMy0xLjIsMC43LTEuOCwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLDEtMS45LDIuNi0yLj'+
			'csNC41Yy0xLjYsMy45LTIuNSw5LjUtMi41LDE1LjljMCw0LjgsMC41LDEwLjEsMS42LDE1LjVsMCwwYzAuOSw0LjcsMi4yLDkuMSwzLjcsMTMuMWMzLjIsMC4zLDYuNSwwLjUsMTAsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M3LjcsMCwxNC45LTAuOSwyMS4xLTIuNGM2LjItMS41LDExLjMtMy43LDE0LjgtNi4xYzIuMy0xLjYsMy45LTMuNCw0LjctNWMwLjQtMC45LDAuNy0xLjgsMC43LTIuOGMwLTAuOS0wLjItMS44LTAuNy0yLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwNS4xLDYxLjMsMTA0LjQsNjAuMywxMDMuNSw1OS40eiBNNTEuNiw0OS42YzAuMS0xLjYsMC4yLTMuMSww'+
			'LjQtNC42YzEuOS0wLjIsMy44LTAuNCw1LjgtMC42bDAuOSw0LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzU2LjIsNDkuMSw1My44LDQ5LjMsNTEuNiw0OS42eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNMTA2LjcsNzMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNCw1LjYtMzEuNiw1LjZjLTIuNy'+
			'wwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LDAuMywxLjQsMC40LDIsMC41bC0yLjUtMTIuNmMwLjksMCwxLjgtMC4xLDIuNy0wLjFsMi40LDEyLjJjMC42LTAuMywxLjItMC43LDEuOC0xLjNjMS0xLDEuOS0yLjYsMi43LTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS40LTQuNCwxLjktNy4yYzEtMC4xLDItMC4zLDMtMC41YzAuNi0wLjEsMS4xLTAuMiwxLjYtMC4zYy0wLjMsMi4xLTAuNiw0LjEtMS4xLDUuOWMtMS4xLDQtMi42LDcuMy00LjksOS43JiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTsmI3g5O2MtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNC0xLjktNC43LTQuNS02LjctNy44Yy0xLjctMi42LTMuMi01LjYtNC42LTguOWMtMy4yLTAuNC02LjItMS05LTEuN2MtNi42LTEuNi0xMi4yLTMuOS0xNi4zLTYuOGMtMi44LTEuOS00LjktNC4yLTYuMi02LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjctMS41LTEuMS0zLjEtMS4xLTQuN2MwLTEuNiwwLjQtMy4yLDEuMS'+
			'00LjdjMC43LTEuNSwxLjctMi44LDMtNC4xYzIuNS0yLjUsNS45LTQuNiwxMC02LjRjMy4xLTEuMyw2LjUtMi40LDEwLjMtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDEuNS0wLjIsMy4xLTAuMiw0LjdjLTYsMS41LTExLDMuNi0xNC40LDZjLTIuMywxLjYtMy45LDMuNC00LjcsNWMtMC40LDAuOS0wLjcsMS44LTAuNywyLjhoMGMwLDAuOSwwLjIsMS44LDAuNywyLjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNSwwLjksMS4xLDEuOSwyLjEsMi45YzEuOSwxLjksNC45LDMuOCw4LjYsNS40YzQuMSwxLjgsOS4yLDMuMiwxNC45LDQuMWMtMS4yLTMuNi0yLjMtNy41LTMuMS0x'+
			'MS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS4xLTUuNy0xLjctMTEuMy0xLjctMTYuNGMwLTUuMSwwLjUtOS44LDEuNi0xMy44YzEuMS00LDIuNi03LjMsNC45LTkuN2MxLjUtMS42LDMuNC0yLjcsNS41LTMuMXYwYzAuNi0wLjEsMS4yLTAuMiwxLjgtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjQsMCwyLjgsMC4zLDQuMSwwLjhjMS4zLDAuNSwyLjYsMS4zLDMuOCwyLjNjMi40LDEuOSw0LjcsNC41LDYuNyw3LjhjMS43LDIuNiwzLjIsNS42LDQuNiw4LjljMy4yLDAuNCw2LjIsMSw5LDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNi42LDEuNiwxMi4yLDMuOSwxNi4zLD'+
			'YuOGMyLjgsMS45LDQuOSw0LjIsNi4xLDYuN2MwLjcsMS41LDEuMSwzLjEsMS4xLDQuN2MwLDEuNi0wLjQsMy4yLTEuMSw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzEwOC45LDcxLjIsMTA3LjksNzIuNiwxMDYuNyw3My44eiIvPgogIDwvZz4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNTIsNDVjLTAuMiwxLjQtMC4zLDMtMC40LDQuNmMyLjMtMC4zLDQuNi0wLjYsNy0wLjdsLTAuOS00LjVDNTUuOCw0NC42LDUzLjgsNDQuOCw1Miw0NXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNMTA5LjYsNjAu'+
			'M2MtMS4yLTIuNi0zLjQtNC44LTYuMS02LjdjLTQuMS0yLjktOS43LTUuMi0xNi4zLTYuOGMtMi44LTAuNy01LjktMS4yLTktMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44Yy0wLjYsMC0xLjIsMC4xLTEuOCwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuMSwwLjQtNCwxLjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS'+
			'43LDE2LjRjMC44LDQuMSwxLjksOCwzLjEsMTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTUuNy0wLjktMTAuOC0yLjMtMTQuOS00LjFjLTMuNy0xLjYtNi43LTMuNS04LjYtNS40Yy0xLTEtMS43LTEuOS0yLjEtMi45Yy0wLjQtMC45LTAuNy0xLjgtMC43LTIuOGgwYzAtMC45LDAuMi0xLjgsMC43LTIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTEuNiwyLjMtMy40LDQuNy01YzMuNC0yLjQsOC40LTQuNSwxNC40LTZjMC0xLjYsMC4xLTMuMiwwLjItNC43Yy0zLjgsMC45LTcuMiwyLTEwLjMsMy4zYy00LjEsMS44LTcuNSwzLjktMTAsNi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5O2MtMS4yLDEuMy0yLjMsMi42LTMsNC4xYy0wLjcsMS41LTEuMSwzLjEtMS4xLDQuN2MwLDEuNiwwLjQsMy4yLDEuMSw0LjdjMS4yLDIuNiwzLjQsNC44LDYuMiw2LjdjNC4xLDIuOSw5LjcsNS4yLDE2LjMsNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjgsMC43LDUuOSwxLjMsOSwxLjdjMS40LDMuMywyLjksNi4zLDQuNiw4LjljMi4xLDMuMiw0LjMsNS45LDYuNyw3LjhjMS4yLDEsMi41LDEuNywzLjgsMi4zYzEuMywwLjUsMi43LDAuOCw0LjEsMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMCwxLjItMC4xLDEuOC0wLjJsMCwwYzIuMS0wLjQsNC0xLjYsNS41LTMuMW'+
			'MyLjMtMi40LDMuOC01LjcsNC45LTkuN2MwLjUtMS44LDAuOS0zLjgsMS4xLTUuOWMtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0xLDAuMi0yLDAuMy0zLDAuNWMtMC40LDIuNy0xLjEsNS4yLTEuOSw3LjJjLTAuOCwyLTEuNywzLjUtMi43LDQuNWMtMC42LDAuNi0xLjIsMS0xLjgsMS4zbC0yLjQtMTIuMmMtMC45LDAtMS44LDAuMS0yLjcsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wyLjUsMTIuNmMtMC42LDAtMS4zLTAuMi0yLTAuNWMtMS41LTAuNi0zLjItMS44LTQuOC0zLjZjLTIuNC0yLjUtNC43LTYuMS02LjgtMTAuNmMyLjYsMC4yLDUu'+
			'MywwLjMsOCwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEyLjMsMCwyMy40LTIuMSwzMS42LTUuNmM0LjEtMS44LDcuNS0zLjksMTAtNi40YzEuMi0xLjMsMi4zLTIuNiwzLTQuMWMwLjctMS41LDEuMS0zLjEsMS4xLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTEwLjgsNjMuNCwxMTAuNCw2MS44LDEwOS42LDYwLjN6IE0xMDUuNiw2Ny44Yy0wLjgsMS42LTIuMywzLjQtNC43LDVjLTMuNSwyLjUtOC42LDQuNi0xNC44LDYuMWMtNi4yLDEuNS0xMy40LDIuNC0yMS4xLDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNCwwLTYuOC0wLjItMTAtMC41Yy0xLjUtNC0yLjgtOC'+
			'40LTMuNy0xMy4xbDAsMGMtMS4xLTUuNS0xLjYtMTAuNy0xLjYtMTUuNWMwLTYuNCwwLjktMTIsMi41LTE1LjljMC44LTIsMS43LTMuNSwyLjctNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYtMC42LDEuMi0xLjEsMS44LTEuNGw2LjksMzQuOWwyLjgsMTQuMmMwLjksMCwxLjgsMCwyLjctMC4xbC0yLjktMTQuN2wtNi45LTM0LjljMC42LDAsMS4zLDAuMiwxLjksMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjUsMC42LDMuMiwxLjgsNC44LDMuNmMyLjQsMi41LDQuNyw2LjEsNi44LDEwLjZjLTIuNi0wLjItNS4zLTAuMy04LTAuM2MtMC4zLDAtMC42LDAtMC45LDBsMC45LDQu'+
			'NWMzLjQsMCw2LjgsMC4yLDEwLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDQsMi44LDguNCwzLjcsMTMuMWMxLjEsNS41LDEuNiwxMC43LDEuNiwxNS41YzAsMC4yLDAsMC4zLDAsMC40YzEuMS0wLjIsMi4xLTAuNCwzLjEtMC42YzAuNS0wLjEsMC45LTAuMiwxLjQtMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTUtMC42LTEwLjQtMS43LTE1LjljLTAuOC00LjEtMS45LTgtMy4xLTExLjZjNS43LDAuOSwxMC43LDIuMywxNC45LDQuMWMzLjcsMS42LDYuNywzLjUsOC42LDUuNGMxLDEsMS43LDEuOSwyLjEsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC45LD'+
			'AuNywxLjgsMC43LDIuOEMxMDYuMiw2NS45LDEwNiw2Ni44LDEwNS42LDY3Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNMTA3LjgsNTguN2MtMi4xLTIuMS01LjQtNC4yLTkuNi02Yy00LjYtMi0xMC4yLTMuNS0xNi41LTQuNWMxLjQsNCwyLjUsOC4zLDMuNCwxMi44YzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUsMC4xLTEsMC4yLTEuNiwwLjNjLTEuMSwwLjItMi4zLDAuNC0zLjQsMC42YzAtMC4yLDAtMC4zLDAtMC41YzAtNS4zLTAuNi0xMS4yLTEuOC0xNy4zYy0xLTUuMi0yLjQt'+
			'MTAuMS00LjEtMTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTMuNi0wLjQtNy4zLTAuNi0xMS4xLTAuNmwtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuOC0wLjMtMS41LTAuNS0yLjItMC41bDcuNywzOC44TDY5LjcsODFjLTEsMC0yLDAuMS0zLDAuMWwtMy4xLTE1LjhsLTcuNy0zOC43Yy0wLjcsMC4zLTEuMywwLjgtMiwxLjVjLTEuMSwxLjItMi4yLDIuOS0zLDUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzQ5LjEsMzcuNSw0OCw0My'+
			'42LDQ4LDUwLjhjMCw1LjMsMC42LDExLjIsMS44LDE3LjJsMCwwYzEsNS4yLDIuNCwxMC4xLDQuMSwxNC41YzMuNiwwLjQsNy4zLDAuNiwxMS4xLDAuNmM4LjYsMCwxNi42LTEsMjMuNS0yLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzYuOS0xLjcsMTIuNi00LjEsMTYuNC02LjhjMi42LTEuOCw0LjMtMy43LDUuMi01LjZjMC41LTEsMC43LTIsMC43LTMuMWMwLTEtMC4yLTItMC43LTMuMUMxMDkuNiw2MC45LDEwOC44LDU5LjgsMTA3LjgsNTguN3omI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE01MC4xLDQ3LjljMC4xLTEuOCwwLjItMy41LDAuNC01LjFjMi4xLTAuMyw0LjItMC41LDYuNC0w'+
			'LjZsMSw0LjlDNTUuMiw0Ny4zLDUyLjYsNDcuNiw1MC4xLDQ3Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS40LDIuNiw2NSwyLjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyBNMTExLjMsNzQuOGMtMi44LDIuOC02LjYsNS4xLTExLjIsNy4xQzkxLDg1LjgsNzguNiw4OC4xLDY1LDg4LjFjLTMsMC02LTAuMS04LjktMC4zYzIuMyw0LjksNC45LDksNy41LDExLjcmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5OyYjeDk7YzEuOSwyLDMuNywzLjMsNS40LDRjMC44LDAuMywxLjUsMC41LDIuMiwwLjVsLTIuOC0xNGMxLDAsMi0wLjEsMy0wLjFsMi43LDEzLjVjMC43LTAuMywxLjMtMC44LDItMS41YzEuMS0xLjIsMi4yLTIuOSwzLTUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC4yLDIuMy0wLjMsMy4zLTAuNWMwLjYtMC4xLDEuMi0wLjIsMS44LTAuNGMtMC4zLDIuMy0wLjcsNC41LTEuMiw2LjVjLTEuMiw0LjQtMi45LDguMS01LjQsMTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNywxLjgtMy43LDMtNi4xLDMuNWwwLDBj'+
			'LTAuNywwLjEtMS4zLDAuMi0yLDAuMmMtMS41LDAtMy4xLTAuMy00LjUtMC45Yy0xLjUtMC42LTIuOS0xLjQtNC4yLTIuNWMtMi43LTIuMS01LjItNS03LjUtOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMS44LTIuOS0zLjYtNi4yLTUuMS05LjljLTMuNS0wLjUtNi45LTEuMS0xMC0xLjlDMzMsODMuNSwyNi44LDgxLDIyLjIsNzcuN2MtMy4xLTIuMi01LjQtNC42LTYuOC03LjVjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEuOCwwLjQtMy42LDEuMi01LjJjMC44LTEuNiwxLjktMy4yLDMuMy00LjVjMi44LTIuOCw2LjYtNS4xLDExLjItNy'+
			'4xYzMuNC0xLjUsNy4zLTIuNywxMS41LTMuN2MtMC4xLDEuNy0wLjIsMy40LTAuMyw1LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy02LjYsMS43LTEyLjIsNC0xNiw2LjdjLTIuNiwxLjgtNC4zLDMuNy01LjIsNS42Yy0wLjUsMS0wLjcsMi0wLjcsMy4xaDBjMCwxLDAuMiwyLDAuNywzLjFjMC41LDEsMS4zLDIuMSwyLjMsMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjEsMi4xLDUuNCw0LjIsOS42LDZjNC42LDIsMTAuMiwzLjUsMTYuNSw0LjVjLTEuNC00LTIuNS04LjMtMy40LTEyLjhDNDMuNiw2Mi42LDQzLDU2LjQsNDMsNTAuOGMwLTUuNywwLjYtMTAuOSwxLjgtMTUuMyYjeGQ7'+
			'JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4yLTQuNCwyLjktOC4xLDUuNC0xMC44YzEuNy0xLjgsMy43LTMsNi4xLTMuNXYwYzAuNy0wLjEsMS4zLTAuMiwyLTAuMmMxLjUsMCwzLjEsMC4zLDQuNSwwLjljMS41LDAuNiwyLjksMS40LDQuMiwyLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNywyLjEsNS4yLDUsNy41LDguNmMxLjgsMi45LDMuNiw2LjIsNS4xLDkuOWMzLjUsMC41LDYuOSwxLjEsMTAsMS45YzcuMywxLjgsMTMuNSw0LjQsMTguMSw3LjZjMy4xLDIuMiw1LjQsNC42LDYuOCw3LjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOCwxLjYsMS4yLDMuNCwxLjIsNS4yYzAsMS44LT'+
			'AuNCwzLjYtMS4yLDUuMkMxMTMuOCw3MS45LDExMi43LDczLjQsMTExLjMsNzQuOHoiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTUwLjUsNDIuOGMtMC4yLDEuNi0wLjQsMy4zLTAuNCw1LjFjMi41LTAuNCw1LjEtMC42LDcuOC0wLjhsLTEtNC45QzU0LjcsNDIuMyw1Mi42LDQyLjUsNTAuNSw0Mi44eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMTQuNiw1OS44Yy0xLjQtMi45LTMuOC01LjMtNi44LTcuNWMtNC42LTMuMi0xMC44LTUuOC0xOC4xLTcuNmMtMy4xLTAuOC02LjUtMS40LTEw'+
			'LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNS0zLjctMy4zLTctNS4xLTkuOWMtMi4zLTMuNi00LjgtNi41LTcuNS04LjZjLTEuMy0xLjEtMi43LTEuOS00LjItMi41Yy0xLjUtMC42LTMtMC45LTQuNS0wLjljLTAuNywwLTEuNCwwLjEtMiwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIuNCwwLjUtNC40LDEuNy02LjEsMy41Yy0yLjUsMi43LTQuMiw2LjQtNS40LDEwLjhjLTEuMiw0LjQtMS44LDkuNi0xLjgsMTUuM2MwLDUuNywwLjYsMTEuOCwxLjksMTguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC45LDQuNSwyLjEsOC44LDMuNCwxMi44Yy02LjMtMS0xMS45LT'+
			'IuNi0xNi41LTQuNWMtNC4yLTEuOC03LjQtMy45LTkuNi02Yy0xLjEtMS4xLTEuOC0yLjEtMi4zLTMuMmMtMC41LTEtMC43LTItMC43LTMuMWgwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLTEsMC4yLTIsMC43LTMuMWMwLjktMS44LDIuNi0zLjgsNS4yLTUuNmMzLjgtMi43LDkuMy01LDE1LjktNi43YzAtMS44LDAuMS0zLjUsMC4zLTUuMmMtNC4yLDEtOCwyLjItMTEuNSwzLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy00LjYsMi04LjQsNC4zLTExLjIsNy4xYy0xLjQsMS40LTIuNSwyLjktMy4zLDQuNWMtMC44LDEuNi0xLjIsMy40LTEuMiw1LjJjMCwxLjgsMC40LDMuNiwxLjIsNS4y'+
			'YzEuNCwyLjksMy44LDUuMyw2LjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjYsMy4yLDEwLjgsNS44LDE4LjEsNy42YzMuMSwwLjgsNi41LDEuNCwxMCwxLjljMS41LDMuNywzLjMsNyw1LjEsOS45YzIuMywzLjYsNC44LDYuNSw3LjUsOC42YzEuMywxLjEsMi43LDEuOSw0LjIsMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjUsMC42LDMsMC45LDQuNSwwLjljMC43LDAsMS4zLTAuMSwyLTAuMmwwLDBjMi40LTAuNSw0LjQtMS43LDYuMS0zLjVjMi41LTIuNyw0LjItNi40LDUuNC0xMC44YzAuNS0yLDAuOS00LjIsMS4yLTYuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLT'+
			'AuNiwwLjEtMS4yLDAuMy0xLjgsMC40Yy0xLjEsMC4yLTIuMiwwLjQtMy4zLDAuNWMtMC41LDMtMS4yLDUuNy0yLjEsOGMtMC45LDIuMi0xLjksMy45LTMsNWMtMC42LDAuNy0xLjMsMS4yLTIsMS41bC0yLjctMTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEsMC4xLTIsMC4xLTMsMC4xbDIuOCwxNGMtMC43LTAuMS0xLjQtMC4yLTIuMi0wLjVjLTEuNy0wLjctMy41LTItNS40LTRjLTIuNi0yLjgtNS4yLTYuOC03LjUtMTEuN0M1OSw4OCw2Miw4OC4xLDY1LDg4LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEzLjYsMCwyNi0yLjMsMzUuMi02LjJjNC42LTIsOC40LTQuMywxMS4yLTcu'+
			'MWMxLjQtMS40LDIuNS0yLjksMy4zLTQuNWMwLjgtMS42LDEuMi0zLjQsMS4yLTUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTE1LjgsNjMuMiwxMTUuNCw2MS40LDExNC42LDU5Ljh6IE0xMTAuMSw2OC4xYy0wLjksMS44LTIuNiwzLjgtNS4yLDUuNmMtMy45LDIuNy05LjYsNS4xLTE2LjQsNi44Yy02LjksMS43LTE0LjksMi43LTIzLjUsMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy44LDAtNy41LTAuMi0xMS4xLTAuNmMtMS43LTQuNC0zLjEtOS4zLTQuMS0xNC41bDAsMEM0OC42LDYxLjksNDgsNTYuMSw0OCw1MC44YzAtNy4xLDEtMTMuMywyLjgtMTcuN2MwLjktMi4yLDEuOS'+
			'0zLjksMy01JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjctMC43LDEuMy0xLjIsMi0xLjVsNy43LDM4LjdsMy4xLDE1LjhjMSwwLDIsMCwzLTAuMWwtMy4yLTE2LjNMNTguOCwyNmMwLjcsMC4xLDEuNCwwLjIsMi4yLDAuNWMxLjYsMC43LDMuNSwyLDUuNCw0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MyLjYsMi44LDUuMiw2LjgsNy41LDExLjdDNzEsNDIsNjgsNDEuOSw2NSw0MS45Yy0wLjMsMC0wLjcsMC0xLDBsMSw1YzMuOCwwLDcuNSwwLjIsMTEuMSwwLjZjMS43LDQuNCwzLjEsOS4zLDQuMSwxNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjIsNi4xLDEuOCwxMS45LDEuOCwx'+
			'Ny4zYzAsMC4yLDAsMC4zLDAsMC41YzEuMi0wLjIsMi4zLTAuNCwzLjQtMC42YzAuNS0wLjEsMS0wLjIsMS42LTAuM2MwLTUuNS0wLjYtMTEuNS0xLjktMTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuOS00LjUtMi4xLTguOC0zLjQtMTIuOGM2LjMsMSwxMS45LDIuNiwxNi41LDQuNWM0LjIsMS44LDcuNCwzLjksOS42LDZjMS4xLDEuMSwxLjgsMi4xLDIuMywzLjJjMC41LDEsMC43LDIsMC43LDMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMTEwLjgsNjYsMTEwLjYsNjcsMTEwLjEsNjguMXoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_on.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_on.style.transition='opacity 500ms ease 0ms';
				if (me._gyro_on.ggCurrentLogicStateAlpha == 0) {
					me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
					me._gyro_on.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_on.style.opacity == 0.0) { me._gyro_on.style.visibility="hidden"; } }, 505);
					me._gyro_on.style.opacity=0;
				}
			}
		}
		me._gyro_on.logicBlock_alpha();
		me._gyro_on.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_on.style.transition='none';
			} else {
				me._gyro_on.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='0';
			me._gyro_on.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_off.style.transition='none';
			} else {
				me._gyro_off.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='1';
			me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
		}
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_on);
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iLz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMUMxMjEuMSwzNCw5Niw4LjksNjUsOC45eiBNNDYuOCwzOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4xLTQsMi42LTcuMyw0LjktOS43YzEuNS0xLjYsMy40LTIuNyw1LjUtMy4xdjBjMC42LTAuMSwxLjItMC4yLDEuOC0wLjJjMS40LDAsMi44LDAuMyw0LjEsMC44YzEuMywwLjUsMi42LDEu'+
			'MywzLjgsMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi40LDEuOSw0LjcsNC41LDYuNyw3LjhjMS43LDIuNiwzLjIsNS42LDQuNiw4LjljMC4xLDAsMC4yLDAsMC4zLDAuMWwtNC4xLDQuMWMtMy0wLjMtNi4yLTAuNS05LjUtMC41bC0wLjktNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC42LDAsMC45LDBjMi43LDAsNS40LDAuMSw4LDAuM2MtMi4xLTQuNC00LjQtOC4xLTYuOC0xMC42Yy0xLjctMS44LTMuNC0zLTQuOC0zLjZjLTAuNy0wLjMtMS4zLTAuNC0xLjktMC41bDUuNywyOC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTIuMywyLjNsLTYtMzAuNGMtMC42LDAuMy0xLjIsMC43LTEuOC'+
			'wxLjRjLTEsMS0xLjksMi42LTIuNyw0LjVjLTEuNiwzLjktMi41LDkuNS0yLjUsMTUuOWMwLDQuOCwwLjUsMTAuMSwxLjYsMTUuNWwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMS4zLDAuNSwyLjUsMC44LDMuOGwtMy43LDMuN2MtMC42LTIuMS0xLjEtNC4zLTEuNi02LjZjLTEuMS01LjctMS43LTExLjMtMS43LTE2LjRDNDUuMiw0Nyw0NS44LDQyLjQsNDYuOCwzOC40eiBNNTguNiw0OC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuNCwwLjItNC44LDAuNC03LDAuN2MwLjEtMS42LDAuMi0zLjEsMC40LTQuNmMxLjktMC4yLDMuOC0wLjQsNS44LTAuNkw1OC42LDQ4Ljl6IE0yMC40LDY5Ljdj'+
			'LTAuNy0xLjUtMS4xLTMuMS0xLjEtNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjYsMC40LTMuMiwxLjEtNC43YzAuNy0xLjUsMS43LTIuOCwzLTQuMWMyLjUtMi41LDUuOS00LjYsMTAtNi40YzMuMS0xLjMsNi41LTIuNCwxMC4zLTMuM2MtMC4xLDEuNS0wLjIsMy4xLTAuMiw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNiwxLjUtMTEsMy42LTE0LjQsNmMtMi4zLDEuNi0zLjksMy40LTQuNyw1Yy0wLjQsMC45LTAuNywxLjgtMC43LDIuOGgwYzAsMC45LDAuMiwxLjgsMC43LDIuOGMwLjUsMC45LDEuMSwxLjksMi4xLDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOSwxLjksNC45LDMuOCw4Lj'+
			'YsNS40YzIuOCwxLjIsNS45LDIuMiw5LjQsM2wtMy43LDMuN2MtNS43LTEuNi0xMC42LTMuNy0xNC40LTYuM0MyMy44LDc0LjUsMjEuNiw3Mi4zLDIwLjQsNjkuN3ogTTMyLjgsMTAwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjEtMC40bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRzMC44LDAuMSwxLjEsMC40bDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC42LDAuNiwxLjYsMCwyLjJsLTY2LDY2QzMzLjYsMTAwLjIsMzMuMiwxMDAuMywzMi44LDEwMC4zeiBNNzguNyw2Mi4zYy0wLjMtMS4z'+
			'LTAuNS0yLjUtMC44LTMuOGwzLjctMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDIuMSwxLjEsNC4zLDEuNiw2LjZjMS4xLDUuNiwxLjYsMTEsMS43LDE1LjljLTAuNSwwLjEtMC45LDAuMi0xLjQsMC4zYy0xLDAuMi0yLDAuNC0zLjEsMC42YzAtMC4xLDAtMC4zLDAtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODAuMyw3Myw3OS44LDY3LjgsNzguNyw2Mi4zeiBNNjkuMyw3OS40Yy0wLjksMC0xLjgsMC4xLTIuNywwLjFsLTEuNi04LjFsMi4zLTIuM0w2OS4zLDc5LjR6IE0xMDYuNyw3My44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuNSwyLjUtNS45LDQuNi0xMCw2LjRjLTguMiwzLjUtMTkuNC'+
			'w1LjYtMzEuNiw1LjZjLTIuNywwLTUuNC0wLjEtOC0wLjNjMi4xLDQuNCw0LjQsOC4xLDYuOCwxMC42YzEuNywxLjgsMy40LDMsNC44LDMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjMsMS40LDAuNCwyLDAuNWwtMi41LTEyLjZjMC45LDAsMS44LTAuMSwyLjctMC4xbDIuNCwxMi4yYzAuNi0wLjMsMS4yLTAuNywxLjgtMS4zYzEtMSwxLjktMi42LDIuNy00LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMiwxLjQtNC40LDEuOS03LjJjMS0wLjEsMi0wLjMsMy0wLjVjMC42LTAuMSwxLjEtMC4yLDEuNi0wLjNjLTAuMywyLjEtMC42LDQuMS0xLjEsNS45Yy0xLjEsNC0yLjYsNy4zLTQuOSw5'+
			'LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41LDEuNi0zLjQsMi43LTUuNSwzLjFsMCwwYy0wLjYsMC4xLTEuMiwwLjItMS44LDAuMmMtMS40LDAtMi44LTAuMy00LjEtMC44Yy0xLjMtMC41LTIuNi0xLjMtMy44LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjQtMS45LTQuNy00LjUtNi43LTcuOGMtMS43LTIuNi0zLjItNS42LTQuNi04LjljLTAuMSwwLTAuMiwwLTAuNC0wLjFsNC4xLTQuMWMzLDAuMyw2LjIsMC41LDkuNSwwLjVjNy43LDAsMTQuOS0wLjksMjEuMS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M2LjItMS41LDExLjMtMy43LDE0LjgtNi4xYzIuMy0xLjYsMy45LTMuNCw0LjctNW'+
			'MwLjQtMC45LDAuNy0xLjgsMC43LTIuOGMwLTAuOS0wLjItMS44LTAuNy0yLjhjLTAuNC0wLjktMS4xLTEuOS0yLjEtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuOS0xLjktNC45LTMuOC04LjYtNS40Yy0yLjgtMS4yLTYtMi4yLTkuNS0zbDMuNy0zLjdjNS43LDEuNiwxMC42LDMuNywxNC40LDYuM2MyLjgsMS45LDQuOSw0LjIsNi4xLDYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywxLjUsMS4xLDMuMSwxLjEsNC43YzAsMS42LTAuNCwzLjItMS4xLDQuN0MxMDguOSw3MS4yLDEwNy45LDcyLjYsMTA2LjcsNzMuOHoiLz4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIj'+
			'ZmZmZmZmIiBkPSJNNTEuNiw0OS42YzIuMy0wLjMsNC42LTAuNiw3LTAuN2wtMC45LTQuNWMtMiwwLjEtMy45LDAuMy01LjgsMC42QzUxLjgsNDYuNSw1MS43LDQ4LDUxLjYsNDkuNnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNOTkuOSwzMS44bC0xLjctMS43Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNHMtMC44LDAuMS0xLjEsMC40bC02Niw2NmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLjMsMC43LDAuNCwxLjEsMC40YzAuNCwwLDAuOC0wLjEsMS4xLTAuNGw2Ni02NkMxMDAuNSwzMy'+
			'4zLDEwMC41LDMyLjQsOTkuOSwzMS44eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik02Ni41LDc5LjVjMC45LDAsMS44LDAsMi43LTAuMWwtMi0xMC4zbC0yLjMsMi4zTDY2LjUsNzkuNXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNODMuNCw3Ny43YzAuNS0wLjEsMC45LTAuMiwxLjQtMC4zYzAtNS0wLjYtMTAuNC0xLjctMTUuOWMtMC40LTIuMy0xLTQuNS0xLjYtNi42bC0zLjcsMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMS4yLDAuNiwyLjUsMC44LDMuOGMxLjEsNS41LDEuNiwxMC43LDEuNiwx'+
			'NS41YzAsMC4yLDAsMC4zLDAsMC40QzgxLjMsNzguMSw4Mi40LDc3LjksODMuNCw3Ny43eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik00OC41LDc1LjJsMy43LTMuN2MtMC4zLTEuMi0wLjYtMi41LTAuOC0zLjhsMCwwYy0xLjEtNS41LTEuNi0xMC43LTEuNi0xNS41YzAtNi40LDAuOS0xMiwyLjUtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LTIsMS43LTMuNSwyLjctNC41YzAuNi0wLjYsMS4yLTEuMSwxLjgtMS40bDYsMzAuNGwyLjMtMi4zbC01LjctMjguN2MwLjYsMCwxLjMsMC4yLDEuOSwwLjVjMS41LDAuNiwzLjIsMS44LDQuOCwzLj'+
			'YmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuNCwyLjUsNC43LDYuMSw2LjgsMTAuNmMtMi42LTAuMi01LjMtMC4zLTgtMC4zYy0wLjMsMC0wLjYsMC0wLjksMGwwLjksNC41YzMuMywwLDYuNCwwLjIsOS41LDAuNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC4xLDAtMC4yLDAtMC4zLTAuMWMtMS40LTMuMy0yLjktNi4zLTQuNi04LjljLTIuMS0zLjItNC4zLTUuOS02LjctNy44Yy0xLjItMS0yLjUtMS43LTMuOC0yLjNjLTEuMy0wLjUtMi43LTAuOC00LjEtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAtMS4yLDAuMS0xLjgsMC4ydjBjLTIuMSwwLjQtNCwx'+
			'LjYtNS41LDMuMWMtMi4zLDIuNC0zLjgsNS43LTQuOSw5LjdjLTEuMSw0LTEuNiw4LjctMS42LDEzLjhjMCw1LjEsMC41LDEwLjcsMS43LDE2LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7QzQ3LjQsNzAuOCw0Ny45LDczLDQ4LjUsNzUuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNDQuNiw3OS4xYy0zLjUtMC44LTYuNy0xLjgtOS40LTNjLTMuNy0xLjYtNi43LTMuNS04LjYtNS40Yy0xLTEtMS43LTEuOS0yLjEtMi45Yy0wLjQtMC45LTAuNy0xLjgtMC43LTIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoMGMwLTAuOSwwLjItMS44LDAuNy0yLj'+
			'hjMC44LTEuNiwyLjMtMy40LDQuNy01YzMuNC0yLjQsOC40LTQuNSwxNC40LTZjMC0xLjYsMC4xLTMuMiwwLjItNC43Yy0zLjgsMC45LTcuMiwyLTEwLjMsMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC4xLDEuOC03LjUsMy45LTEwLDYuNGMtMS4yLDEuMy0yLjMsMi42LTMsNC4xYy0wLjcsMS41LTEuMSwzLjEtMS4xLDQuN2MwLDEuNiwwLjQsMy4yLDEuMSw0LjdjMS4yLDIuNiwzLjQsNC44LDYuMiw2LjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzMuNywyLjYsOC42LDQuNywxNC40LDYuM0w0NC42LDc5LjF6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZm'+
			'ZiIgZD0iTTEwOS43LDYwLjNjLTEuMi0yLjYtMy40LTQuOC02LjEtNi43Yy0zLjctMi42LTguNi00LjctMTQuNC02LjNsLTMuNywzLjdjMy41LDAuOCw2LjcsMS44LDkuNSwzJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjcsMS42LDYuNywzLjUsOC42LDUuNGMxLDEsMS43LDEuOSwyLjEsMi45YzAuNCwwLjksMC43LDEuOCwwLjcsMi44YzAsMC45LTAuMiwxLjgtMC43LDIuOGMtMC44LDEuNi0yLjMsMy40LTQuNyw1JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy41LDIuNS04LjYsNC42LTE0LjgsNi4xYy02LjIsMS41LTEzLjQsMi40LTIxLjEsMi40Yy0zLjMsMC02LjQtMC4yLTkuNS0wLj'+
			'VsLTQuMSw0LjFjMC4xLDAsMC4yLDAsMC40LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS40LDMuMywyLjksNi4zLDQuNiw4LjljMi4xLDMuMiw0LjMsNS45LDYuNyw3LjhjMS4yLDEsMi41LDEuNywzLjgsMi4zYzEuMywwLjUsMi43LDAuOCw0LjEsMC44YzAuNiwwLDEuMi0wLjEsMS44LTAuMmwwLDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzIuMS0wLjQsNC0xLjYsNS41LTMuMWMyLjMtMi40LDMuOC01LjcsNC45LTkuN2MwLjUtMS44LDAuOS0zLjgsMS4xLTUuOWMtMC41LDAuMS0xLjEsMC4yLTEuNiwwLjNjLTEsMC4yLTIsMC4zLTMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5'+
			'O2MtMC40LDIuNy0xLjEsNS4yLTEuOSw3LjJjLTAuOCwyLTEuNywzLjUtMi43LDQuNWMtMC42LDAuNi0xLjIsMS0xLjgsMS4zbC0yLjQtMTIuMmMtMC45LDAtMS44LDAuMS0yLjcsMC4xbDIuNSwxMi42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC42LDAtMS4zLTAuMi0yLTAuNWMtMS41LTAuNi0zLjItMS44LTQuOC0zLjZjLTIuNC0yLjUtNC43LTYuMS02LjgtMTAuNmMyLjYsMC4yLDUuMywwLjMsOCwwLjNjMTIuMywwLDIzLjQtMi4xLDMxLjYtNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M0LjEtMS44LDcuNS0zLjksMTAtNi40YzEuMi0xLjMsMi4zLTIuNiwzLTQuMWMwLjctMS41LD'+
			'EuMS0zLjEsMS4xLTQuN0MxMTAuOCw2My40LDExMC40LDYxLjgsMTA5LjcsNjAuM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNmZmZmZmY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzJfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRDMTI3LjQsMzAuNiw5OS41LDIuNiw2NSwyLjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTQ0LjgsMzUuNGMxLjItNC40LDIuOS04LjEsNS40LTEwLjhjMS43LTEu'+
			'OCwzLjctMyw2LjEtMy41djBjMC43LTAuMSwxLjMtMC4yLDItMC4yYzEuNSwwLDMuMSwwLjMsNC41LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNSwwLjYsMi45LDEuNCw0LjIsMi41YzIuNywyLjEsNS4yLDUsNy41LDguNmMxLjgsMi45LDMuNiw2LjIsNS4xLDkuOWMwLjEsMCwwLjMsMCwwLjQsMC4xbC00LjUsNC41Yy0zLjQtMC4zLTYuOS0wLjUtMTAuNS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMS01YzAuMywwLDAuNywwLDEsMGMzLDAsNiwwLjEsOC45LDAuNGMtMi4zLTQuOS00LjktOS03LjUtMTEuN2MtMS45LTItMy43LTMuMy01LjQtNGMtMC44LTAuMy0xLjUtMC41LTIuMi0wLjVsNi'+
			'4zLDMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMi42LDIuNmwtNi43LTMzLjhjLTAuNywwLjMtMS4zLDAuOC0yLDEuNWMtMS4xLDEuMi0yLjIsMi45LTMsNUM0OS4xLDM3LjUsNDgsNDMuNiw0OCw1MC44YzAsNS4zLDAuNiwxMS4yLDEuOCwxNy4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywxLjQsMC42LDIuOCwwLjksNC4ybC00LjEsNC4xYy0wLjctMi40LTEuMi00LjgtMS43LTcuM0M0My42LDYyLjYsNDMsNTYuNCw0Myw1MC44QzQzLDQ1LjEsNDMuNiwzOS45LDQ0LjgsMzUuNHogTTU3LjksNDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjcsMC4yLTUuMywwLjQtNy44LDAuOGMwLjEt'+
			'MS44LDAuMi0zLjUsMC40LTUuMWMyLjEtMC4zLDQuMi0wLjUsNi40LTAuNkw1Ny45LDQ3LjF6IE0xNS40LDcwLjJjLTAuOC0xLjYtMS4yLTMuNC0xLjItNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjgsMC40LTMuNiwxLjItNS4yYzAuOC0xLjYsMS45LTMuMiwzLjMtNC41YzIuOC0yLjgsNi42LTUuMSwxMS4yLTcuMWMzLjQtMS41LDcuMy0yLjcsMTEuNS0zLjdjLTAuMSwxLjctMC4yLDMuNC0wLjMsNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuNiwxLjctMTIuMiw0LTE2LDYuN2MtMi42LDEuOC00LjMsMy43LTUuMiw1LjZjLTAuNSwxLTAuNywyLTAuNywzLjFoMGMwLDEsMC4yLDIsMC43LD'+
			'MuMWMwLjUsMSwxLjMsMi4xLDIuMywzLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjEsMi4xLDUuNCw0LjIsOS42LDZjMy4xLDEuMyw2LjYsMi40LDEwLjUsMy4zbC00LjEsNC4xYy02LjQtMS44LTExLjgtNC4xLTE2LTdDMTkuMiw3NS42LDE2LjgsNzMuMSwxNS40LDcwLjJ6IE0yOS4zLDEwNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywwLjcsMC43LDEuNyww'+
			'LDIuNGwtNzMuMyw3My4zQzMwLjEsMTA0LjEsMjkuNywxMDQuMywyOS4zLDEwNC4zeiBNODAuMiw2MmMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsNC4xLTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNywyLjQsMS4yLDQuOCwxLjcsNy4zYzEuMiw2LjIsMS44LDEyLjIsMS45LDE3LjdjLTAuNSwwLjEtMSwwLjItMS42LDAuM2MtMS4xLDAuMi0yLjMsMC40LTMuNCwwLjZjMC0wLjIsMC0wLjMsMC0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M4Miw3My45LDgxLjQsNjguMSw4MC4yLDYyeiBNNjkuNyw4MWMtMSwwLTIsMC4xLTMsMC4xbC0xLjgtOC45bDIuNi0yLjZMNjkuNyw4MXogTTExMS4zLDc0Lj'+
			'hjLTIuOCwyLjgtNi42LDUuMS0xMS4yLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzkxLDg1LjgsNzguNiw4OC4xLDY1LDg4LjFjLTMsMC02LTAuMS04LjktMC4zYzIuMyw0LjksNC45LDksNy41LDExLjdjMS45LDIsMy43LDMuMyw1LjQsNGMwLjgsMC4zLDEuNSwwLjUsMi4yLDAuNWwtMi44LTE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMSwwLDItMC4xLDMtMC4xbDIuNywxMy41YzAuNy0wLjMsMS4zLTAuOCwyLTEuNWMxLjEtMS4yLDIuMi0yLjksMy01YzAuOS0yLjIsMS42LTQuOSwyLjEtOGMxLjEtMC4yLDIuMy0wLjMsMy4zLTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjEsMS4yLTAuMiwx'+
			'LjgtMC40Yy0wLjMsMi4zLTAuNyw0LjUtMS4yLDYuNWMtMS4yLDQuNC0yLjksOC4xLTUuNCwxMC44Yy0xLjcsMS44LTMuNywzLTYuMSwzLjVsMCwwYy0wLjcsMC4xLTEuMywwLjItMiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41LDAtMy4xLTAuMy00LjUtMC45Yy0xLjUtMC42LTIuOS0xLjQtNC4yLTIuNWMtMi43LTIuMS01LjItNS03LjUtOC42Yy0xLjgtMi45LTMuNi02LjItNS4xLTkuOWMtMC4xLDAtMC4zLDAtMC40LTAuMWw0LjUtNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy40LDAuMyw2LjksMC41LDEwLjUsMC41YzguNiwwLDE2LjYtMSwyMy41LTIuN2M2LjktMS43LDEyLjYtNC4xLD'+
			'E2LjQtNi44YzIuNi0xLjgsNC4zLTMuNyw1LjItNS42YzAuNS0xLDAuNy0yLDAuNy0zLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTItMC43LTMuMWMtMC41LTEtMS4zLTIuMS0yLjMtMy4yYy0yLjEtMi4xLTUuNC00LjItOS42LTZjLTMuMS0xLjMtNi42LTIuNC0xMC41LTMuNGw0LjEtNC4xYzYuNCwxLjgsMTEuOCw0LjEsMTYsNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuMSwyLjIsNS40LDQuNiw2LjgsNy41YzAuOCwxLjYsMS4yLDMuNCwxLjIsNS4yYzAsMS44LTAuNCwzLjYtMS4yLDUuMkMxMTMuOCw3MS45LDExMi43LDczLjQsMTExLjMsNzQuOHoiLz4KICA8Zz4KICAgPHBhdGggZmls'+
			'bC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNTAuMSw0Ny45YzIuNS0wLjQsNS4xLTAuNiw3LjgtMC44bC0xLTQuOWMtMi4yLDAuMi00LjMsMC40LTYuNCwwLjZDNTAuMyw0NC40LDUwLjIsNDYuMSw1MC4xLDQ3Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTTEwMy44LDI4LjFsLTEuOC0xLjhjLTAuMy0wLjMtMC44LTAuNS0xLjItMC41cy0wLjksMC4yLTEuMiwwLjVMMjYuMiw5OS41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMiwwLjVzMC45LTAuMi'+
			'wxLjItMC41bDczLjMtNzMuM0MxMDQuNCwyOS44LDEwNC40LDI4LjcsMTAzLjgsMjguMXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNNjYuNyw4MS4xYzEsMCwyLDAsMy0wLjFsLTIuMy0xMS40bC0yLjYsMi42TDY2LjcsODEuMXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNODUuNCw3OS4xYzAuNS0wLjEsMS0wLjIsMS42LTAuM2MwLTUuNS0wLjYtMTEuNS0xLjktMTcuN2MtMC41LTIuNS0xLjEtNS0xLjctNy4zbC00LjEsNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMS40LDAuNywyLjgsMC45LDQu'+
			'MmMxLjIsNi4xLDEuOCwxMS45LDEuOCwxNy4zYzAsMC4yLDAsMC4zLDAsMC41QzgzLjIsNzkuNSw4NC4zLDc5LjMsODUuNCw3OS4xeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik00Ni42LDc2LjNsNC4xLTQuMWMtMC4zLTEuNC0wLjYtMi44LTAuOS00LjJsMCwwQzQ4LjYsNjEuOSw0OCw1Ni4xLDQ4LDUwLjhjMC03LjEsMS0xMy4zLDIuOC0xNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjktMi4yLDEuOS0zLjksMy01YzAuNy0wLjcsMS4zLTEuMiwyLTEuNWw2LjcsMzMuOGwyLjYtMi42TDU4LjgsMjZjMC43LDAuMSwxLjQsMC4yLDIuMiwwLjVjMS'+
			'42LDAuNywzLjUsMiw1LjQsNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi42LDIuOCw1LjIsNi44LDcuNSwxMS43QzcxLDQyLDY4LjEsNDEuOSw2NSw0MS45Yy0wLjMsMC0wLjcsMC0xLDBsMSw1YzMuNiwwLDcuMSwwLjIsMTAuNSwwLjVsNC41LTQuNWMtMC4xLDAtMC4zLDAtMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTEuNS0zLjctMy4zLTctNS4xLTkuOWMtMi4zLTMuNi00LjgtNi41LTcuNS04LjZjLTEuMy0xLjEtMi43LTEuOS00LjItMi41Yy0xLjUtMC42LTMtMC45LTQuNS0wLjljLTAuNywwLTEuNCwwLjEtMiwwLjJ2MCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTIu'+
			'NCwwLjUtNC40LDEuNy02LjEsMy41Yy0yLjUsMi43LTQuMiw2LjQtNS40LDEwLjhjLTEuMiw0LjQtMS44LDkuNi0xLjgsMTUuM2MwLDUuNywwLjYsMTEuOCwxLjksMTguMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDNDUuNCw3MS41LDQ2LDczLjksNDYuNiw3Ni4zeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik00Mi4zLDgwLjZjLTMuOS0wLjktNy40LTItMTAuNS0zLjNjLTQuMi0xLjgtNy40LTMuOS05LjYtNmMtMS4xLTEuMS0xLjgtMi4xLTIuMy0zLjJjLTAuNS0xLTAuNy0yLTAuNy0zLjFoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC0xLDAuMi'+
			'0yLDAuNy0zLjFjMC45LTEuOCwyLjYtMy44LDUuMi01LjZjMy44LTIuNyw5LjMtNSwxNS45LTYuN2MwLTEuOCwwLjEtMy41LDAuMy01LjJjLTQuMiwxLTgsMi4yLTExLjUsMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNC42LDItOC40LDQuMy0xMS4yLDcuMWMtMS40LDEuNC0yLjUsMi45LTMuMyw0LjVjLTAuOCwxLjYtMS4yLDMuNC0xLjIsNS4yYzAsMS44LDAuNCwzLjYsMS4yLDUuMmMxLjQsMi45LDMuOCw1LjMsNi44LDcuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC4xLDIuOSw5LjYsNS4zLDE2LDdMNDIuMyw4MC42eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9'+
			'IiNmZmZmZmYiIGQ9Ik0xMTQuNiw1OS44Yy0xLjQtMi45LTMuOC01LjMtNi44LTcuNWMtNC4xLTIuOS05LjYtNS4zLTE2LTdsLTQuMSw0LjFjMy45LDAuOSw3LjQsMiwxMC41LDMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC4yLDEuOCw3LjQsMy45LDkuNiw2YzEuMSwxLjEsMS44LDIuMSwyLjMsMy4yYzAuNSwxLDAuNywyLDAuNywzLjFjMCwxLTAuMiwyLTAuNywzLjFjLTAuOSwxLjgtMi42LDMuOC01LjIsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMy45LDIuNy05LjYsNS4xLTE2LjQsNi44Yy02LjksMS43LTE0LjksMi43LTIzLjUsMi43Yy0zLjYsMC03LjItMC4yLTEwLjUtMC'+
			'41TDUwLDg3LjFjMC4xLDAsMC4zLDAsMC40LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS41LDMuNywzLjMsNyw1LjEsOS45YzIuMywzLjYsNC44LDYuNSw3LjUsOC42YzEuMywxLjEsMi43LDEuOSw0LjIsMi41YzEuNSwwLjYsMywwLjksNC41LDAuOWMwLjcsMCwxLjMtMC4xLDItMC4ybDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMi40LTAuNSw0LjQtMS43LDYuMS0zLjVjMi41LTIuNyw0LjItNi40LDUuNC0xMC44YzAuNS0yLDAuOS00LjIsMS4yLTYuNWMtMC42LDAuMS0xLjIsMC4zLTEuOCwwLjRjLTEuMSwwLjItMi4yLDAuNC0zLjMsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsm'+
			'I3g5O2MtMC41LDMtMS4yLDUuNy0yLjEsOGMtMC45LDIuMi0xLjksMy45LTMsNWMtMC42LDAuNy0xLjMsMS4yLTIsMS41bC0yLjctMTMuNWMtMSwwLjEtMiwwLjEtMywwLjFsMi44LDE0JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LTAuMS0xLjQtMC4yLTIuMi0wLjVjLTEuNy0wLjctMy41LTItNS40LTRjLTIuNi0yLjgtNS4yLTYuOC03LjUtMTEuN0M1OSw4OCw2Miw4OC4xLDY1LDg4LjFjMTMuNiwwLDI2LTIuMywzNS4yLTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNC42LTIsOC40LTQuMywxMS4yLTcuMWMxLjQtMS40LDIuNS0yLjksMy4zLTQuNWMwLjgtMS42LDEuMi0zLjQsMS'+
			'4yLTUuMkMxMTUuOCw2My4yLDExNS40LDYxLjQsMTE0LjYsNTkuOHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._gyro_off.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._gyro_off.style.transition='opacity 500ms ease 0ms';
				if (me._gyro_off.ggCurrentLogicStateAlpha == 0) {
					me._gyro_off.style.visibility=me._gyro_off.ggVisible?'inherit':'hidden';
					me._gyro_off.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._gyro_off.style.opacity == 0.0) { me._gyro_off.style.visibility="hidden"; } }, 505);
					me._gyro_off.style.opacity=0;
				}
			}
		}
		me._gyro_off.logicBlock_alpha();
		me._gyro_off.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._gyro_off.style.transition='none';
			} else {
				me._gyro_off.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_off.style.opacity='0';
			me._gyro_off.style.visibility='hidden';
			if (player.transitionsDisabled) {
				me._gyro_on.style.transition='none';
			} else {
				me._gyro_on.style.transition='all 500ms ease-out 0ms';
			}
			me._gyro_on.style.opacity='1';
			me._gyro_on.style.visibility=me._gyro_on.ggVisible?'inherit':'hidden';
		}
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._gyro.appendChild(me._gyro_off);
		me._controller_slider.appendChild(me._gyro);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_thumbnail') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else if (
				((player.getVariableValue('pos_thumbnail') == Number("4")))
			)
			{
				newLogicStatePosition = 4;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail.style.transition='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStatePosition == 0) {
					me._thumbnail.style.left='0px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 1) {
					me._thumbnail.style.left='32px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 2) {
					me._thumbnail.style.left='64px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 3) {
					me._thumbnail.style.left='96px';
					me._thumbnail.style.top='0px';
				}
				else if (me._thumbnail.ggCurrentLogicStatePosition == 4) {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
				else {
					me._thumbnail.style.left='128px';
					me._thumbnail.style.top='0px';
				}
			}
		}
		me._thumbnail.logicBlock_position();
		me._thumbnail.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_thumbnail', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail.style.transition='left 0s, top 0s';
				if (me._thumbnail.ggCurrentLogicStateVisible == 0) {
					me._thumbnail.style.visibility=(Number(me._thumbnail.style.opacity)>0||!me._thumbnail.style.opacity)?'inherit':'hidden';
					me._thumbnail.ggVisible=true;
				}
				else {
					me._thumbnail.style.visibility="hidden";
					me._thumbnail.ggVisible=false;
				}
			}
		}
		me._thumbnail.logicBlock_visible();
		me._thumbnail.onclick=function (e) {
			if (
				(
					((player.getViewerSize(true).width <= 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_mobile', !player.getVariableValue('vis_thumbnail_menu_mobile'));
			}
			if (
				(
					((player.getViewerSize(true).width > 450))
				)
			) {
				player.setVariableValue('vis_thumbnail_menu_show', !player.getVariableValue('vis_thumbnail_menu_show'));
			}
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_hide_button_show=document.createElement('div');
		els=me._thumbnail_hide_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDguOUMzNCw4LjksOC45LDM0LDguOSw2NVMzNCwxMjEuMSw2NSwxMjEuMWMzMSwwLDU2LjEtMjUuMSw1Ni4xLTU2LjFTOTYsOC45LDY1LDguOXogTTU1LjQsNTcuOCYjeGE7JiN4OTsmI3g5O2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4YTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEgz'+
			'MC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjImI3hhOyYjeDk7JiN4OTtsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHomI3hhOyYjeDk7JiN4OTsgTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjJjMC'+
			'wxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjUmI3hhOyYjeDk7JiN4OTtjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNEMxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik01NS40LDU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMyYjeGE7JiN4OTsmI3g5O2Mx'+
			'LjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIuMnogTTMyLjgsMTAwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNCYjeGE7JiN4OTsmI3g5O2wtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjYmI3hhOyYjeDk7JiN4OTtDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6IE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SD'+
			'YxLjlsMTIuNy0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yJiN4YTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjQmI3hhOyYjeDk7JiN4OTtDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6IE01NS40LDU3LjhjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjQmI3hhOyYjeDk7JiN4OTtoMTQuM2MxLjQsMCwyLjUs'+
			'MS4xLDIuNSwyLjR2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIuMnogTTMyLjgsMTAwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNCYjeGE7JiN4OTsmI3g5O2wtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjYmI3hhOyYjeDk7JiN4OTtDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6IE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDYxLjlsMTIuNy'+
			'0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yJiN4YTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjQmI3hhOyYjeDk7JiN4OTtDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button_show__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAxMzAgMTMwIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEzMCAxMzA7IiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTTY1LDIuNkMzMC42LDIuNiwyLjYsMzAuNiwyLjYsNjVzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNFM5OS40LDIuNiw2NSwyLjZ6IE01NC4zLDU3LjEmI3hhOyYjeDk7JiN4OTtjMC0xLjUsMS4yLTIuNywyLjctMi43aDExLjZMNTQuMyw2OC43VjU3LjF6IE0yMy43LDcyLjlWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGE7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43'+
			'LTIuNywyLjdIMjYuNEMyNC45LDc1LjcsMjMuNyw3NC40LDIzLjcsNzIuOXogTTI5LjMsMTA0LjRjLTAuNCwwLTAuOS0wLjItMS4yLTAuNWwtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40JiN4YTsmI3g5OyYjeDk7bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuM0MzMC4xLDEwNC4yLDI5LjcsMTA0LjQsMjkuMywxMDQuNHomI3hhOyYjeDk7JiN4OTsgTTc1LjcsNzIuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdINjEuNWwxNC4xLTE0LjFMNzUuNyw3Mi45TDc1LjcsNzIuOXogTT'+
			'EwNi4zLDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDg3LjgmI3hhOyYjeDk7JiN4OTtjLTEuNSwwLTIuNy0xLjItMi43LTIuN1Y1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuN0MxMDYuMyw1Ny4xLDEwNi4zLDcyLjksMTA2LjMsNzIuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yXzFfIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik01NC4zLDU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDExLjZMNTQuMyw2OC43VjU3LjF6IE0yMy43LDcyLjlWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOCYjeGE7'+
			'JiN4OTsmI3g5O2MxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdIMjYuNEMyNC45LDc1LjcsMjMuNyw3NC40LDIzLjcsNzIuOXogTTI5LjMsMTA0LjRjLTAuNCwwLTAuOS0wLjItMS4yLTAuNSYjeGE7JiN4OTsmI3g5O2wtMS44LTEuOGMtMC43LTAuNy0wLjctMS43LDAtMi40bDczLjMtNzMuM2MwLjMtMC4zLDAuOC0wLjUsMS4yLTAuNXMwLjksMC4yLDEuMiwwLjVsMS44LDEuOGMwLjcsMC43LDAuNywxLjcsMCwyLjRsLTczLjMsNzMuMyYjeGE7JiN4OTsmI3g5O0MzMC4xLDEwNC4yLDI5LjcsMTA0LjQsMjkuMywxMDQuNHogTTc1LjcsNzIuOWMwLDEuNS0xLj'+
			'IsMi43LTIuNywyLjdINjEuNWwxNC4xLTE0LjFMNzUuNyw3Mi45TDc1LjcsNzIuOXogTTEwNi4zLDcyLjkmI3hhOyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDg3LjhjLTEuNSwwLTIuNy0xLjItMi43LTIuN1Y1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuNyYjeGE7JiN4OTsmI3g5O0MxMDYuMyw1Ny4xLDEwNi4zLDcyLjksMTA2LjMsNzIuOXogTTU0LjMsNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTEuNkw1NC4zLDY4LjdWNTcuMXogTTIzLjcsNzIuOVY1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuNyYjeGE7JiN4OTsmI3g5O2gx'+
			'NS44YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0gyNi40QzI0LjksNzUuNywyMy43LDc0LjQsMjMuNyw3Mi45eiBNMjkuMywxMDQuNGMtMC40LDAtMC45LTAuMi0xLjItMC41JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zJiN4YTsmI3g5OyYjeDk7QzMwLjEsMTA0LjIsMjkuNywxMDQuNCwyOS4zLDEwNC40eiBNNzUuNyw3Mi45YzAsMS41LTEuMiwyLjctMi'+
			'43LDIuN0g2MS41bDE0LjEtMTQuMUw3NS43LDcyLjlMNzUuNyw3Mi45eiBNMTA2LjMsNzIuOSYjeGE7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLjdIODcuOGMtMS41LDAtMi43LTEuMi0yLjctMi43VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43JiN4YTsmI3g5OyYjeDk7QzEwNi4zLDU3LjEsMTA2LjMsNzIuOSwxMDYuMyw3Mi45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_hide_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_hide_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_hide_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == true)) && 
				((player.getViewerSize(true).width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == true)) && 
				((player.getViewerSize(true).width <= 450))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button_show.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_hide_button_show.style.opacity == 0.0) { me._thumbnail_hide_button_show.style.visibility="hidden"; } }, 505);
					me._thumbnail_hide_button_show.style.opacity=0;
				}
			}
		}
		me._thumbnail_hide_button_show.logicBlock_alpha();
		me._thumbnail_hide_button_show.onmouseenter=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='hidden';
			me._thumbnail_hide_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_hide_button_show']=true;
		}
		me._thumbnail_hide_button_show.onmouseleave=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='inherit';
			me._thumbnail_hide_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_hide_button_show']=false;
		}
		me._thumbnail_hide_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button_show);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTExOC45LDM5N2MwLTMxLTI1LjEtNTYuMS01Ni4xLTU2LjFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE0NCw0NTMuMS0xMTguOSw0MjgtMTE4LjksMzk3eiBNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTIwOS43LDQw'+
			'Ni42TC0yMDkuNyw0MDYuNnogTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xODIuMSw0MDYuNkwtMTgyLjEsNDA2LjZ6IE0tMTU0LjUsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTU0LjUsNDA2LjZ6Ii'+
			'8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjJjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0xNTQuNSw0MDYuNnoiLz4KICAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4z'+
			'YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTIwOS43LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjNjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDE0LjNjMS40LDAsMi41LDEuMSwyLjUsMi40djE0LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0yMDkuNy'+
			'w0MDYuNkwtMjA5LjcsNDA2LjZ6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTExMi42LDM5N2MwLTM0LjQtMjcuOS02Mi40LTYyLjQtNjIuNGMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDAuNiw0NTkuNC0xMTIuNiw0MzEuNC0xMTIuNiwzOTd6IE0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wt'+
			'MjEzLjYsNDA3LjZMLTIxMy42LDQwNy42eiBNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE4Mi45LDQwNy42TC0xODIuOSw0MDcuNnogTS0xNTIuMiw0MDcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xNTIuMi'+
			'w0MDcuNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTUyLjIsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLjdMLTE1Mi4yLDQwNy42eiIvPgogICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0y'+
			'Ljd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6Ii8+CiAgICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMjEzLjYsNDA3LjZjLTEuNSwwLTIuNy0xLjItMi43LTIuN3YtMTUuOWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLj'+
			'dMLTIxMy42LDQwNy42TC0yMTMuNiw0MDcuNnoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_show') == false)) && 
				((player.getViewerSize(true).width > 450))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_thumbnail_menu_mobile') == false)) && 
				((player.getViewerSize(true).width <= 450))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button_show.style.transition='opacity 500ms ease 0ms';
				if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 1) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_show_button_show.style.opacity == 0.0) { me._thumbnail_show_button_show.style.visibility="hidden"; } }, 505);
					me._thumbnail_show_button_show.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button_show.logicBlock_alpha();
		me._thumbnail_show_button_show.onmouseenter=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnail_show_button_show']=true;
		}
		me._thumbnail_show_button_show.onmouseleave=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnail_show_button_show']=false;
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button_show);
		me._controller_slider.appendChild(me._thumbnail);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTc4LjEsMzYxLjFsNi4yLDBjMy41LDAsNi40LDIuOSw2LjQsNi40djIuOWMwLDMuNS0yLjksNi40LTYuNCw2LjRoLTYuMmMtMy41LDAtNi40LTIuOS02LjQtNi40bDAtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NC41LDM2NC0xODEuNiwzNjEuMS0xNzguMSwzNjEuMXog'+
			'TS0xNjcsNDMwLjRILTE4M2MtMC44LDAtMS41LTAuNy0xLjUtMS41bDAtMzcuN2MwLTAuOCwwLjctMS41LDEuNS0xLjVsMTUuOSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDAsMS41LDAuNywxLjUsMS41bDAsMzcuN0MtMTY1LjUsNDI5LjctMTY2LjIsNDMwLjQtMTY3LDQzMC40eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTY1LjUsMzkxLjJjMC0wLjgtMC43LTEuNS0xLjUtMS41bC0xNS45LDBjLTAuOCwwLTEuNSwwLjctMS41LDEuNWwwLDM3LjdjMCwwLjgsMC43LDEuNSwxLjUsMS41aDE1Lj'+
			'kmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuOCwwLDEuNS0wLjcsMS41LTEuNUwtMTY1LjUsMzkxLjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTc4LjUsMzU3LjFsNi45LDBjMy45LDAsNy4xLDMuMiw3LjEsNy4xdjMuM2MwLDMuOS0zLjIsNy4xLTcuMSw3LjFoLTYuOWMtMy45LDAtNy4xLTMuMi03LjEtNy4xbDAtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE4NS42LDM2MC4zLTE4Mi40LDM1Ny4xLTE3OC41'+
			'LDM1Ny4xeiBNLTE2Ni4xLDQzNC4xaC0xNy43Yy0wLjksMC0xLjctMC44LTEuNy0xLjdsMC00MS45YzAtMC45LDAuOC0xLjcsMS43LTEuN2wxNy43LDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjksMCwxLjcsMC44LDEuNywxLjdsMCw0MS45Qy0xNjQuNCw0MzMuMy0xNjUuMiw0MzQuMS0xNjYuMSw0MzQuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE2NC40LDM5MC41YzAtMC45LTAuOC0xLjctMS43LTEuN2wtMTcuNywwYy0wLjksMC0xLjcsMC44LTEuNywxLjdsMCw0MS45YzAsMC45LDAuOCwxLj'+
			'csMS43LDEuN2gxNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjksMCwxLjctMC44LDEuNy0xLjdMLTE2NC40LDM5MC41eiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_information') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('pos_information') == Number("3")))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._info.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._info.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._info.style.transition='left 0s, top 0s';
				if (me._info.ggCurrentLogicStatePosition == 0) {
					me._info.style.left='0px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 1) {
					me._info.style.left='32px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 2) {
					me._info.style.left='64px';
					me._info.style.top='0px';
				}
				else if (me._info.ggCurrentLogicStatePosition == 3) {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
				else {
					me._info.style.left='96px';
					me._info.style.top='0px';
				}
			}
		}
		me._info.logicBlock_position();
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='left 0s, top 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.onclick=function (e) {
			player.setVariableValue('vis_userdata', true);
		}
		me._info.onmouseenter=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
		}
		me._info.onmouseleave=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._info);
		el=me._autorotate_buttons=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="autorotate_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_buttons.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('pos_autorotate') == Number("0")))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == Number("1")))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('pos_autorotate') == Number("2")))
			)
			{
				newLogicStatePosition = 2;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._autorotate_buttons.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._autorotate_buttons.style.transition='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStatePosition == 0) {
					me._autorotate_buttons.style.left='0px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 1) {
					me._autorotate_buttons.style.left='32px';
					me._autorotate_buttons.style.top='0px';
				}
				else if (me._autorotate_buttons.ggCurrentLogicStatePosition == 2) {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
				else {
					me._autorotate_buttons.style.left='64px';
					me._autorotate_buttons.style.top='0px';
				}
			}
		}
		me._autorotate_buttons.logicBlock_position();
		me._autorotate_buttons.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_buttons.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_buttons.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_buttons.style.transition='left 0s, top 0s';
				if (me._autorotate_buttons.ggCurrentLogicStateVisible == 0) {
					me._autorotate_buttons.style.visibility=(Number(me._autorotate_buttons.style.opacity)>0||!me._autorotate_buttons.style.opacity)?'inherit':'hidden';
					me._autorotate_buttons.ggVisible=true;
				}
				else {
					me._autorotate_buttons.style.visibility="hidden";
					me._autorotate_buttons.ggVisible=false;
				}
			}
		}
		me._autorotate_buttons.logicBlock_visible();
		me._autorotate_buttons.onclick=function (e) {
			player.setUseGyro(false);
			player.toggleAutorotate();
		}
		me._autorotate_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_start=document.createElement('div');
		els=me._autorotate_start__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUy0xNDQsMzQwLjktMTc1LDM0MC45JiN4ZDsmI3hhOyYjeDk7JiN4OTt6IE0tMTUzLjksNDIzLjZjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjRoMGMtMTguNywwLTM0LTE1LjItMzQtMzRoLTAuNWgtNy43Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjdjLTAuMy0wLjUtMC4yLTEsMC4xLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDEyLjctMTcuOGMwLjMtMC40'+
			'LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuM2MtMC4zLDAuNS0wLjYsMC43LTEuMSwwLjdoLTcuNmgtMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxMy44LDExLjIsMjUsMjUsMjVoMGM1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNEMtMTUzLjEsNDIyLTE1My4yLDQyMy4xLTE1My45LDQyMy42eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0tMTc5LDM5N2MwLTIuMiwxLjgtNCw0LTRjMi4yLDAsNCwxLjgsNCw0YzAsMi4yLTEuOCw0LTQsNEMtMTc3LjIsND'+
			'AxLTE3OSwzOTkuMi0xNzksMzk3eiBNLTE0NC41LDQxNi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjQtMC42LDAuNi0xLjEsMC42Yy0wLjQsMC0wLjctMC4yLTEtMC42bC0xMi44LTE3LjhjLTAuMy0wLjQtMC40LTAuOS0wLjEtMS4zYzAuMy0wLjUsMC42LTAuNywxLjEtMC43aDcuNmgwLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEzLjgtMTEuMi0yNS0yNS0yNWgwYy01LjgsMC0xMS4xLDItMTUuMyw1LjNjLTAuNiwwLjUtMS40LDAuNC0yLTAuMmMtMC41LTAuNS0zLjEtMy41LTQtNC40Yy0wLjYtMC43LTAuNi0xLjgsMC4xLTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuOC00LjYsMTMu'+
			'MS03LjQsMjEuMS03LjRoMGMxOC43LDAsMzQsMTUuMiwzNCwzNGgwLjVoNy43YzAuNSwwLDAuOCwwLjIsMS4xLDAuN2MwLjMsMC41LDAuMiwxLTAuMSwxLjNMLTE0NC41LDQxNi45eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNTMuNyw0MjEuM2MtMC44LTAuOS0zLjUtMy45LTQtNC40Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2gwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEzLjgsMC0yNS0xMS4yLTI1LTI1aDAuN2g3LjZjMC41LDAsMC44LTAuMiwxLjEtMC43YzAuMy'+
			'0wLjUsMC4yLTEtMC4xLTEuM2wtMTIuOC0xNy44Yy0wLjMtMC40LTAuNi0wLjYtMS0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41LDAtMC44LDAuMi0xLjEsMC42bC0xMi43LDE3LjhjLTAuMywwLjQtMC40LDAuOS0wLjEsMS4zYzAuMywwLjUsMC42LDAuNywxLjEsMC43aDcuN2gwLjVjMCwxOC43LDE1LjIsMzQsMzQsMzRoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzgsMCwxNS4zLTIuOCwyMS4xLTcuNEMtMTUzLjIsNDIzLjEtMTUzLjEsNDIyLTE1My43LDQyMS4zeiIvPgogIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xMzEuNywzOTcuN2MtMC4zLTAuNS0wLjYt'+
			'MC43LTEuMS0wLjdoLTcuN2gtMC41YzAtMTguNy0xNS4yLTM0LTM0LTM0aDBjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTAuOCwxLjYtMC4xLDIuM2MwLjgsMC45LDMuNSwzLjksNCw0LjRjMC42LDAuNiwxLjQsMC42LDIsMC4yYzQuMi0zLjMsOS41LTUuMywxNS4zLTUuM2gwYzEzLjgsMCwyNSwxMS4yLDI1LDI1aC0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi'+
			'43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMxLjUsMzk4LjctMTMxLjQsMzk4LjItMTMxLjcsMzk3Ljd6Ii8+CiAgPGNpcmNsZSBjeT0iMzk3IiBjeD0iLTE3NSIgcj0iNCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_start__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNGMzNC40LDAsNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTUxLjUsNDI2LjZjLTYuNCw1LjEtMTQuNiw4LjItMjMuNSw4LjJoMGMtMjAuOCwwLTM3LjctMTYuOS0zNy43LTM3LjdoLTAuNmgtOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNSwwLTAuOS0wLjItMS4yLTAuN2MtMC4zLTAuNS0wLjItMS4xLDAuMS0xLjVsMTQu'+
			'MS0xOS44YzAuMy0wLjQsMC42LTAuNiwxLjItMC42YzAuNCwwLDAuNywwLjIsMS4xLDAuNmwxNC4yLDE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC40LDAuNCwxLDAuMSwxLjVjLTAuMywwLjUtMC42LDAuNy0xLjIsMC43aC04LjRoLTAuN2MwLDE1LjMsMTIuNCwyNy43LDI3LjcsMjcuN2gwYzYuNCwwLDEyLjMtMi4yLDE3LTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0wLjUsMS42LTAuNCwyLjIsMC4yYzAuNiwwLjYsMy41LDMuOCw0LjQsNC45Qy0xNTAuNyw0MjQuOC0xNTAuNyw0MjYtMTUxLjUsNDI2LjZ6IE0tMTc5LjQsMzk3YzAtMi40LDItNC40LDQuNC00LjQmI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5O2MyLjQsMCw0LjQsMiw0LjQsNC40YzAsMi40LTIsNC40LTQuNCw0LjRDLTE3Ny40LDQwMS40LTE3OS40LDM5OS41LTE3OS40LDM5N3ogTS0xNDEuMSw0MTkuMWMtMC4zLDAuNC0wLjYsMC42LTEuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC42bC0xNC4yLTE5LjhjLTAuMy0wLjQtMC40LTEtMC4xLTEuNWMwLjMtMC41LDAuNi0wLjcsMS4yLTAuN2g4LjRoMC43YzAtMTUuMy0xMi40LTI3LjctMjcuNy0yNy43aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNi40LDAtMTIuMywyLjItMTcsNS45Yy0wLjcsMC41LTEuNiwwLjQtMi4yLTAuMmMtMC42LTAu'+
			'Ni0zLjUtMy44LTQuNC00LjljLTAuNy0wLjgtMC42LTIsMC4yLTIuNmM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yaDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MyMC44LDAsMzcuNywxNi45LDM3LjcsMzcuN2gwLjZoOC42YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1MS40LDQyNGMtMC45LTEtMy45LTQuMy00LjQtNC45Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1Lj'+
			'loMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xNS4zLDAtMjcuNy0xMi40LTI3LjctMjcuN2gwLjdoOC40YzAuNSwwLDAuOS0wLjIsMS4yLTAuN3MwLjItMS4xLTAuMS0xLjVsLTE0LjItMTkuOGMtMC4zLTAuNC0wLjYtMC42LTEuMS0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC4xLDE5LjhjLTAuMywwLjQtMC40LDEtMC4xLDEuNWMwLjMsMC41LDAuNiwwLjcsMS4yLDAuN2g4LjZoMC42YzAsMjAuOCwxNi45LDM3LjcsMzcuNywzNy43aDAmI3hkOyYjeGE7JiN4OTsmI3g5O2M4LjksMCwxNy0zLjEsMjMuNS04LjJDLTE1MC43LDQyNi0xNTAuNyw0MjQuOC0x'+
			'NTEuNCw0MjR6Ii8+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTEyNi45LDM5Ny44Yy0wLjMtMC41LTAuNi0wLjctMS4yLTAuN2gtOC42aC0wLjZjMC0yMC44LTE2LjktMzcuNy0zNy43LTM3LjdoMGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLjYtMC44LDEuOC0wLjIsMi42YzAuOSwxLDMuOSw0LjMsNC40LDQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWgwYzE1LjMsMCwyNy43LDEyLjQsMjcuNywyNy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtoLTAuN2gtOC40Yy0wLjUsMC'+
			'0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNmMwLjUsMCwwLjktMC4yLDEuMi0wLjZsMTQuMS0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTEyNi43LDM5OC45LTEyNi42LDM5OC4zLTEyNi45LDM5Ny44eiIvPgogIDxjaXJjbGUgY3k9IjM5NyIgY3g9Ii0xNzUiIHI9IjQuNCIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._autorotate_start__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate_start";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_start.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_start.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_start.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_start.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_start.style.transition='opacity 500ms ease 0ms';
				if (me._autorotate_start.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
				else {
					me._autorotate_start.style.visibility=me._autorotate_start.ggVisible?'inherit':'hidden';
					me._autorotate_start.style.opacity=1;
				}
			}
		}
		me._autorotate_start.logicBlock_alpha();
		me._autorotate_start.onmouseenter=function (e) {
			me._autorotate_start__img.style.visibility='hidden';
			me._autorotate_start__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_start']=true;
		}
		me._autorotate_start.onmouseleave=function (e) {
			me._autorotate_start__img.style.visibility='inherit';
			me._autorotate_start__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_start']=false;
		}
		me._autorotate_start.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_start);
		el=me._autorotate_stop=document.createElement('div');
		els=me._autorotate_stop__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE5Ni4xLDM3MC40YzUuOC00LjYsMTMuMS03LjQsMjEuMS03LjRjNy43LDAsMTQuOSwyLjYsMjAuNiw3bC02LjQsNi40Yy00LTIuOC04LjktNC40LTE0LjItNC40Yy01LjgsMC0xMS4xLDItMTUuMyw1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNS0xLjQsMC40LTItMC4yYy0w'+
			'LjUtMC41LTMuMS0zLjUtNC00LjRDLTE5Ni45LDM3Mi0xOTYuOCwzNzEtMTk2LjEsMzcwLjR6IE0tMjE3LjIsMzk3Yy0wLjUsMC0wLjgtMC4yLTEuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNS0wLjItMSwwLjEtMS4zbDEyLjctMTcuOGMwLjMtMC40LDAuNi0wLjYsMS4xLTAuNmMwLjQsMCwwLjcsMC4yLDEsMC42bDEyLjgsMTcuOGMwLjMsMC40LDAuNCwwLjksMC4xLDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4xLDAuN2gtNy42aC0wLjZjMCw1LjIsMS43LDEwLjEsNC41LDE0LjFsLTYuNCw2LjRjLTQuNC01LjctNy0xMi44LTcuMS0yMC41aC0wLj'+
			'VILTIxNy4yeiBNLTIwNy4yLDQzMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4ybDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NkMtMjA2LjQsNDMyLjItMjA2LjgsNDMyLjMtMjA3LjIsNDMyLjN6IE0tMTUzLjksNDIzLjNjLTUuOCw0LjYtMTMuMSw3LjQtMjEuMSw3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNy43LDAtMTQuOC0yLjYtMjAuNS02LjlsNi40LTYuNGM0LDIu'+
			'Nyw4LjgsNC4zLDE0LDQuM2M1LjgsMCwxMS4xLTIsMTUuMy01LjNjMC42LTAuNSwxLjQtMC40LDIsMC4yYzAuNSwwLjUsMy4xLDMuNSw0LDQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTMuMSw0MjEuOC0xNTMuMiw0MjIuOC0xNTMuOSw0MjMuM3ogTS0xNDQuNSw0MTYuOWMtMC4zLDAuNC0wLjYsMC42LTEuMSwwLjZjLTAuNCwwLTAuNy0wLjItMS0wLjZsLTEyLjgtMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0wLjktMC4xLTEuM2MwLjMtMC41LDAuNi0wLjcsMS4xLTAuN2g3LjZoMC43YzAtNS4zLTEuNi0xMC4xLTQuNC0xNC4ybDYuNC02LjRjNC40LDUuNyw3LDEyLjksNy'+
			'wyMC42aDAuNWg3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMCwwLjgsMC4yLDEuMSwwLjdjMC4zLDAuNSwwLjIsMS0wLjEsMS4zTC0xNDQuNSw0MTYuOXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTQyLjgsMzYxLjdjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NmMtMC4zLDAuMy0wLjcsMC40LTEuMSwwLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjEtMC40bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYt'+
			'NjZDLTE0My42LDM2MS44LTE0My4yLDM2MS43LTE0Mi44LDM2MS43Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xOTIuMywzNzcuMWMwLjYsMC42LDEuNCwwLjYsMiwwLjJjNC4yLTMuMyw5LjUtNS4zLDE1LjMtNS4zYzUuMywwLDEwLjEsMS42LDE0LjIsNC40bDYuNC02LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy01LjctNC40LTEyLjktNy0yMC42LTdjLTgsMC0xNS4zLDIuOC0yMS4xLDcuNGMtMC43LDAuNS0wLjgsMS42LTAuMSwyLjNDLTE5NS40LDM3My43LTE5Mi44LDM3Ni42LTE5Mi4zLDM3Ny4xeiIvPgogICA8cGF0aCBmaWxsLW'+
			'9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTMxLjcsMzk3LjdjLTAuMy0wLjUtMC42LTAuNy0xLjEtMC43aC03LjdoLTAuNWMwLTcuNy0yLjYtMTQuOS03LTIwLjZsLTYuNCw2LjRjMi44LDQsNC40LDguOSw0LjQsMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtoLTAuN2gtNy42Yy0wLjUsMC0wLjgsMC4yLTEuMSwwLjdjLTAuMywwLjUtMC4yLDEsMC4xLDEuM2wxMi44LDE3LjhjMC4zLDAuNCwwLjYsMC42LDEsMC42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNmwxMi43LTE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTguNi0xMzEuNCwzOTguMi0xMzEuNywzOTcu'+
			'N3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0yMDksMzk3YzAuMSw3LjcsMi43LDE0LjgsNy4xLDIwLjVsNi40LTYuNGMtMi44LTQtNC41LTguOC00LjUtMTQuMWgwLjZoNy42YzAuNSwwLDAuOC0wLjIsMS4xLTAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLTAuNSwwLjItMS0wLjEtMS4zbC0xMi44LTE3LjhjLTAuMy0wLjQtMC42LTAuNi0xLTAuNmMtMC41LDAtMC44LDAuMi0xLjEsMC42bC0xMi43LDE3LjhjLTAuMywwLjQtMC40LDAuOS0wLjEsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC41LDAuNi'+
			'wwLjcsMS4xLDAuN2g3LjdILTIwOXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1Ny43LDQxNi42Yy0wLjYtMC42LTEuNC0wLjYtMi0wLjJjLTQuMiwzLjMtOS41LDUuMy0xNS4zLDUuM2MtNS4yLDAtMTAtMS42LTE0LTQuM2wtNi40LDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjNS43LDQuMywxMi44LDYuOSwyMC41LDYuOWM4LDAsMTUuMy0yLjgsMjEuMS03LjRjMC43LTAuNSwwLjgtMS42LDAuMS0yLjNDLTE1NC42LDQyMC4xLTE1Ny4yLDQxNy4xLTE1Ny43LDQxNi42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_stop__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_stop__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xOTguNSwzNjcuNWM2LjQtNS4xLDE0LjYtOC4yLDIzLjUtOC4yYzguNiwwLDE2LjUsMi45LDIyLjksNy44bC03LjIsNy4yYy00LjUtMy4xLTkuOS00LjktMTUuNy00LjljLTYuNCwwLTEyLjMsMi4yLTE3LDUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC41LTEuNiwwLjQt'+
			'Mi4yLTAuMmMtMC42LTAuNi0zLjUtMy44LTQuNC00LjlDLTE5OS4zLDM2OS4yLTE5OS4zLDM2OC4xLTE5OC41LDM2Ny41eiBNLTIyMS45LDM5N2MtMC41LDAtMC45LTAuMi0xLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjUtMC4yLTEuMSwwLjEtMS41bDE0LjEtMTkuOGMwLjMtMC40LDAuNi0wLjYsMS4yLTAuNmMwLjQsMCwwLjcsMC4yLDEuMSwwLjZsMTQuMiwxOS44YzAuMywwLjQsMC40LDEsMC4xLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNiwwLjctMS4yLDAuN2gtOC41aC0wLjdjMC4xLDUuOCwxLjksMTEuMiw1LDE1LjZsLTcuMSw3LjFjLTQuOS02LjMtNy'+
			'44LTE0LjItNy45LTIyLjhoLTAuNkgtMjIxLjl6IE0tMjEwLjcsNDM2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDLTIwOS45LDQzNi4xLTIxMC4zLDQzNi4zLTIxMC43LDQzNi4zeiBNLTE1MS41LDQyNi4zYy02LjQsNS4xLTE0LjYsOC4yLTIzLjUsOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTguNSwwLTE2'+
			'LjQtMi45LTIyLjgtNy43bDcuMi03LjJjNC40LDMsOS44LDQuOCwxNS42LDQuOGM2LjQsMCwxMi4zLTIuMiwxNy01LjljMC43LTAuNSwxLjYtMC40LDIuMiwwLjJjMC42LDAuNiwzLjUsMy44LDQuNCw0LjkmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTUwLjcsNDI0LjUtMTUwLjcsNDI1LjctMTUxLjUsNDI2LjN6IE0tMTQxLjEsNDE5LjFjLTAuMywwLjQtMC42LDAuNi0xLjIsMC42Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjZsLTE0LjItMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC40LTAuNC0xLTAuMS0xLjVjMC4zLTAuNSwwLjYtMC43LDEuMi0wLjdoOC40aDAuN2MwLTUuOC0xLjgtMTEuMy'+
			'00LjktMTUuN2w3LjItNy4yYzQuOSw2LjQsNy44LDE0LjMsNy44LDIyLjloMC42aDguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDAuOSwwLjIsMS4yLDAuN2MwLjMsMC41LDAuMiwxLjEtMC4xLDEuNUwtMTQxLjEsNDE5LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTEzOS4zLDM1Ny43YzAuNCwwLDAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjktMC4yLTEuMi0w'+
			'LjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNDLTE0MC4xLDM1Ny45LTEzOS43LDM1Ny43LTEzOS4zLDM1Ny43Ii8+CiAgPGc+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xOTQuMiwzNzQuOWMwLjYsMC42LDEuNSwwLjcsMi4yLDAuMmM0LjctMy43LDEwLjYtNS45LDE3LTUuOWM1LjgsMCwxMS4zLDEuOCwxNS43LDQuOWw3LjItNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtNi40LTQuOS0xNC4zLTcuOC0yMi45LTcuOGMtOC45LDAtMTcsMy4xLTIzLjUsOC4yYy0wLjgsMC42LTAuOCwxLjgtMC4yLDIuNkMtMTk3LjcsMz'+
			'cxLjEtMTk0LjgsMzc0LjQtMTk0LjIsMzc0Ljl6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xMjYuOSwzOTcuN2MtMC4zLTAuNS0wLjYtMC43LTEuMi0wLjdoLTguNmgtMC42YzAtOC42LTIuOS0xNi41LTcuOC0yMi45bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MzLjEsNC41LDQuOSw5LjksNC45LDE1LjdoLTAuN2gtOC40Yy0wLjUsMC0wLjksMC4yLTEuMiwwLjdjLTAuMywwLjUtMC4yLDEuMSwwLjEsMS41bDE0LjIsMTkuOGMwLjMsMC40LDAuNiwwLjYsMS4xLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC41LDAsMC45LTAu'+
			'MiwxLjItMC42bDE0LjEtMTkuOEMtMTI2LjcsMzk4LjgtMTI2LjYsMzk4LjMtMTI2LjksMzk3Ljd6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMjEyLjcsMzk3YzAuMSw4LjYsMywxNi41LDcuOSwyMi44bDcuMS03LjFjLTMuMS00LjQtNS05LjgtNS0xNS42aDAuN2g4LjVjMC41LDAsMC45LTAuMiwxLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMtMC41LDAuMi0xLjEtMC4xLTEuNWwtMTQuMi0xOS44Yy0wLjMtMC40LTAuNi0wLjYtMS4xLTAuNmMtMC41LDAtMC45LDAuMi0xLjIsMC42bC0xNC4xLDE5LjhjLTAuMy'+
			'wwLjQtMC40LDEtMC4xLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuNSwwLjYsMC43LDEuMiwwLjdoOC42SC0yMTIuN3oiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1NS44LDQxOC44Yy0wLjYtMC42LTEuNS0wLjctMi4yLTAuMmMtNC43LDMuNy0xMC42LDUuOS0xNyw1LjljLTUuOCwwLTExLjEtMS44LTE1LjYtNC44bC03LjIsNy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2M2LjMsNC44LDE0LjIsNy43LDIyLjgsNy43YzguOSwwLDE3LTMuMSwyMy41LTguMmMwLjgtMC42LDAuOC0xLjgsMC4yLTIuNkMtMTUyLjMsNDIyLjYtMTU1'+
			'LjIsNDE5LjQtMTU1LjgsNDE4Ljh6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._autorotate_stop__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate_stop";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._autorotate_stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._autorotate_stop.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._autorotate_stop.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._autorotate_stop.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._autorotate_stop.style.transition='opacity 500ms ease 0ms';
				if (me._autorotate_stop.ggCurrentLogicStateAlpha == 0) {
					me._autorotate_stop.style.visibility=me._autorotate_stop.ggVisible?'inherit':'hidden';
					me._autorotate_stop.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._autorotate_stop.style.opacity == 0.0) { me._autorotate_stop.style.visibility="hidden"; } }, 505);
					me._autorotate_stop.style.opacity=0;
				}
			}
		}
		me._autorotate_stop.logicBlock_alpha();
		me._autorotate_stop.onmouseenter=function (e) {
			me._autorotate_stop__img.style.visibility='hidden';
			me._autorotate_stop__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_stop']=true;
		}
		me._autorotate_stop.onmouseleave=function (e) {
			me._autorotate_stop__img.style.visibility='inherit';
			me._autorotate_stop__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_stop']=false;
		}
		me._autorotate_stop.ggUpdatePosition=function (useTransition) {
		}
		me._autorotate_buttons.appendChild(me._autorotate_stop);
		me._controller_slider.appendChild(me._autorotate_buttons);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTQzLjIsMzg3LjVjMS4xLDAsMS42LDAuNSwxLjYsMS44djE1LjVjMCwwLjUtMC4yLDAuOS0wLjUsMS4zYy0wLjQsMC40LTAuNywwLjUtMS4xLDAuNWgtNjMuNSYjeGQ7JiN4YTsmI3g5O2MtMC40LDAtMC43LTAuMi0xLjEtMC41Yy0wLjQtMC40LTAuNS0wLjctMC41LTEuM3YtMTUuNWMwLTEuMywwLjUtMS44LDEuNi0xLjhILTE0My4yeiIvPgogPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4x'+
			'LDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsgTS0xNDEuNiw0MDQuN2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC02My41Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0xNS41JiN4ZDsmI3hhOyYjeDk7YzAtMS4zLDAuNS0xLjgsMS42LTEuOGg2My41YzEuMSwwLDEuNiwwLjUsMS42LDEuOFY0MDQuN3oiLz4KPC9zdmc+Cg==';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8cGF0aCBmaW'+
			'xsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTM5LjcsMzg2LjRjMS4yLDAsMS44LDAuNiwxLjgsMnYxNy4yYzAsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC03MC42JiN4ZDsmI3hhOyYjeDk7Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAuNC0wLjQtMC42LTAuOC0wLjYtMS40di0xNy4yYzAtMS40LDAuNi0yLDEuOC0ySC0xMzkuN3oiLz4KIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQt'+
			'NjIuNFMtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiYjeGQ7JiN4YTsmI3g5OyBNLTEzNy45LDQwNS42YzAsMC42LTAuMiwxLTAuNiwxLjRjLTAuNCwwLjQtMC44LDAuNi0xLjIsMC42aC03MC42Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMiYjeGQ7JiN4YTsmI3g5O2MwLTEuNCwwLjYtMiwxLjgtMmg3MC42YzEuMiwwLDEuOCwwLjYsMS44LDJWNDA1LjZ6Ii8+Cjwvc3ZnPgo=';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style.transition='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		me._zoomout.logicBlock_visible();
		me._zoomout.onmouseenter=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseleave=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
		}
		me._zoomout.ggCurrentLogicStateVisible = -1;
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(0.5,true);
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTE0MS42LDQwNC43YzAsMC41LTAuMiwwLjktMC41LDEuM2MtMC40LDAuNC0wLjcsMC41LTEuMSwwLjVoLTIyLjN2MjIuMWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0xNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4x'+
			'LTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTIyLjFoLTIyLjNjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMywwLjUtMS44LDEuNi0xLjhoMjIuM3YtMjIuMWMwLTEuMywwLjUtMS44LDEuNi0xLjhoMTUuN2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MjIuMWgyMi4zYzEuMSwwLDEuNiwwLjUsMS42LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDEuNiwzODkuMy0xNDEuNiw0MDQuNy0xNDEuNiw0MDQuN3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9Ij'+
			'EiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTY1LjUsMzg3LjVoMjIuM2MxLjEsMCwxLjYsMC41LDEuNiwxLjh2MTUuNWMwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0yMi4zdjIyLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNS0wLjIsMC45LTAuNSwxLjNjLTAuNCwwLjQtMC43LDAuNS0xLjEsMC41aC0xNS43Yy0wLjQsMC0wLjctMC4yLTEuMS0wLjVjLTAuNC0wLjQtMC41LTAuNy0wLjUtMS4zdi0yMi4xaC0yMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLTAuNy0wLjItMS4xLTAuNWMtMC40LTAuNC0wLjUtMC43LTAuNS0xLjN2LTE1LjVjMC0xLjMs'+
			'MC41LTEuOCwxLjYtMS44aDIyLjN2LTIyLjFjMC0xLjMsMC41LTEuOCwxLjYtMS44aDE1LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMCwxLjYsMC41LDEuNiwxLjhWMzg3LjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuNmMtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRzMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzcuOSw0MDUuNmMwLDAuNi0wLjIsMS0wLjYsMS40Yy0wLjQsMC40LTAuOCwwLjYtMS4yLDAuNmgtMjQuOHYyNC42YzAsMC42LTAuMiwxLTAuNiwxLjRzLTAuOCwwLjYtMS4yLDAuNmgtMTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZjLTAu'+
			'NC0wLjQtMC42LTAuOC0wLjYtMS40di0yNC42aC0yNC44Yy0wLjQsMC0wLjgtMC4yLTEuMi0wLjZzLTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aDI0Ljh2LTI0LjZjMC0xLjQsMC42LTIsMS44LTJoMTcuNGMxLjIsMCwxLjgsMC42LDEuOCwydjI0LjZoMjQuOGMxLjIsMCwxLjgsMC42LDEuOCwyQy0xMzcuOSwzODguNC0xMzcuOSw0MDUuNi0xMzcuOSw0MDUuNnoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTY0LjUsMzg2LjRoMjQuOGMxLjIsMCwxLj'+
			'gsMC42LDEuOCwydjE3LjJjMCwwLjYtMC4yLDEtMC42LDEuNGMtMC40LDAuNC0wLjgsMC42LTEuMiwwLjZoLTI0Ljh2MjQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42LTAuMiwxLTAuNiwxLjRzLTAuOCwwLjYtMS4yLDAuNmgtMTcuNGMtMC40LDAtMC44LTAuMi0xLjItMC42Yy0wLjQtMC40LTAuNi0wLjgtMC42LTEuNHYtMjQuNmgtMjQuOGMtMC40LDAtMC44LTAuMi0xLjItMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuNi0wLjgtMC42LTEuNHYtMTcuMmMwLTEuNCwwLjYtMiwxLjgtMmgyNC44di0yNC42YzAtMS40LDAuNi0yLDEuOC0yaDE3LjRjMS4yLDAsMS44LDAuNiwxLjgsMlYzODYu'+
			'NHoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style.transition='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		me._zoomin.logicBlock_visible();
		me._zoomin.onmouseenter=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseleave=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
		}
		me._zoomin.ggCurrentLogicStateVisible = -1;
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-0.5,true);
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._zoomin);
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmouseleave=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_up']) {
				player.changeTiltLog(0.5,true);
			}
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmouseleave=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_down']) {
				player.changeTiltLog(-0.5,true);
			}
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmouseleave=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_left']) {
				player.changePanLog(0.5,true);
			}
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmouseleave=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_right']) {
				player.changePanLog(-0.5,true);
			}
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller_slider.appendChild(me._key_right);
		me._controller.appendChild(me._controller_slider);
		el=me._element_alpha_timer=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="element_alpha_timer";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._element_alpha_timer.ggIsActive=function() {
			return (me._element_alpha_timer.ggTimestamp + me._element_alpha_timer.ggTimeout) >= skin.ggCurrentTime;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._element_alpha_timer.ggDeactivate=function () {
			player.setVariableValue('vis_timer', true);
		}
		me._element_alpha_timer.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._element_alpha_timer);
		me.divSkin.appendChild(me._controller);
		el=me._pst_video=document.createElement('div');
		el.ggId="pst video";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 477px;';
		hs+='left : calc(50% - ((724px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((477px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 724px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pst_video.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pst_video.ggUpdatePosition=function (useTransition) {
		}
		el=me._retangulo_do_video=document.createElement('div');
		el.ggId="retangulo do video";
		el.ggDx=0;
		el.ggDy=-36;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 14px;';
		hs+='height : 542px;';
		hs+='left : calc(50% - ((877px + 2px) / 2) + 0px);';
		hs+='opacity : 0.90002;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((542px + 2px) / 2) - 36px);';
		hs+='visibility : hidden;';
		hs+='width : 877px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._retangulo_do_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._retangulo_do_video.ggUpdatePosition=function (useTransition) {
		}
		me._pst_video.appendChild(me._retangulo_do_video);
		el=me._x_do_video=document.createElement('div');
		el.ggId="x do video";
		el.ggDx=410;
		el.ggDy=-283;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 43px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 410px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((43px + 0px) / 2) - 283px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._x_do_video.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._x_do_video.onclick=function (e) {
			me._pst_video.style.transition='none';
			me._pst_video.style.visibility='hidden';
			me._pst_video.ggVisible=false;
			me._video_1.ggInitMedia('');
			me._video_1.style.transition='none';
			me._video_1.style.visibility='hidden';
			me._video_1.ggVisible=false;
		}
		me._x_do_video.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 69px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((69px + 0px) / 2) - 2px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>X<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._x_do_video.appendChild(me._text_1);
		me._pst_video.appendChild(me._x_do_video);
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
			me._video_1.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_1.ggVideoNotLoaded == false && me._video_1.ggDeactivate && player.isPlaying('video_1')) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('iframe');
			me._video_1__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=0&amp;controls=1&amp;loop=1&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_1__vid.setAttribute('src', ggVideoUrl);
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__vid.setAttribute('allow', 'autoplay');
			me._video_1__vid.setAttribute('allowfullscreen', 'true');
			me._video_1__vid.setAttribute('style', 'border:none; ; ;');
			me._video_1.appendChild(me._video_1__vid);
			me._video_1.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_1.ggYoutubeApiReady();}
		}
		el.ggId="Video 1";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 480px;';
		hs+='left : calc(50% - ((854px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((480px + 0px) / 2) - 15px);';
		hs+='visibility : hidden;';
		hs+='width : 854px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
		}
		me._pst_video.appendChild(me._video_1);
		me.divSkin.appendChild(me._pst_video);
		el=me._start_desktop=document.createElement('div');
		el.ggId="start desktop";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_desktop.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start_desktop.ggUpdatePosition=function (useTransition) {
		}
		el=me._fundo_do_banner=document.createElement('div');
		el.ggId="fundo do banner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='height : 10000px;';
		hs+='left : calc(50% - ((10000px + 2px) / 2) + 0px);';
		hs+='opacity : 0.60005;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10000px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 10000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fundo_do_banner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fundo_do_banner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fundo_do_banner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fundo_do_banner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fundo_do_banner.style.transition='';
				if (me._fundo_do_banner.ggCurrentLogicStateVisible == 0) {
					me._fundo_do_banner.style.visibility=(Number(me._fundo_do_banner.style.opacity)>0||!me._fundo_do_banner.style.opacity)?'inherit':'hidden';
					me._fundo_do_banner.ggVisible=true;
				}
				else {
					me._fundo_do_banner.style.visibility="hidden";
					me._fundo_do_banner.ggVisible=false;
				}
			}
		}
		me._fundo_do_banner.logicBlock_visible();
		me._fundo_do_banner.ggUpdatePosition=function (useTransition) {
		}
		me._start_desktop.appendChild(me._fundo_do_banner);
		el=me._banner=document.createElement('div');
		els=me._banner__img=document.createElement('img');
		els.className='ggskin ggskin_banner';
		hs=basePath + 'images/banner.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="banner";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1920px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._banner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._banner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._banner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._banner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._banner.style.transition='';
				if (me._banner.ggCurrentLogicStateVisible == 0) {
					me._banner.style.visibility=(Number(me._banner.style.opacity)>0||!me._banner.style.opacity)?'inherit':'hidden';
					me._banner.ggVisible=true;
				}
				else {
					me._banner.style.visibility="hidden";
					me._banner.ggVisible=false;
				}
			}
		}
		me._banner.logicBlock_visible();
		me._banner.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 291px;';
		hs+='cursor : pointer;';
		hs+='height : 82px;';
		hs+='left : calc(50% - ((272px + 0px) / 2) - 8px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 272px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.onclick=function (e) {
			me._logo_desktop.style.transition='none';
			me._logo_desktop.style.visibility=(Number(me._logo_desktop.style.opacity)>0||!me._logo_desktop.style.opacity)?'inherit':'hidden';
			me._logo_desktop.ggVisible=true;
			me._menu_desktop.style.transition='none';
			me._menu_desktop.style.visibility=(Number(me._menu_desktop.style.opacity)>0||!me._menu_desktop.style.opacity)?'inherit':'hidden';
			me._menu_desktop.ggVisible=true;
			me._menu_inferior.style.transition='none';
			me._menu_inferior.style.visibility=(Number(me._menu_inferior.style.opacity)>0||!me._menu_inferior.style.opacity)?'inherit':'hidden';
			me._menu_inferior.ggVisible=true;
			me._menu_lateral.style.transition='none';
			me._menu_lateral.style.visibility=(Number(me._menu_lateral.style.opacity)>0||!me._menu_lateral.style.opacity)?'inherit':'hidden';
			me._menu_lateral.ggVisible=true;
			me._start_desktop.style.transition='none';
			me._start_desktop.style.visibility='hidden';
			me._start_desktop.ggVisible=false;
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._banner.appendChild(me._rectangle_1);
		me._start_desktop.appendChild(me._banner);
		me.divSkin.appendChild(me._start_desktop);
		el=me._do_not_modify_skin=document.createElement('div');
		el.ggId="do_not_modify_skin";
		el.ggDx=-1;
		el.ggDy=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #404549;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100% + 0px) / 2) - 2px);';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._do_not_modify_skin.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._do_not_modify_skin.ggUpdatePosition=function (useTransition) {
		}
		el=me._do_not_modify_skin_text=document.createElement('div');
		els=me._do_not_modify_skin_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="do_not_modify_skin_text";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((205px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 205px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: normal;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._do_not_modify_skin_text.ggUpdateText=function() {
			var params = [];
			var hs = player._(" Please use the skin \n configuration button\n to modify the skin.", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._do_not_modify_skin_text.ggUpdateText();
		el.appendChild(els);
		me._do_not_modify_skin_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._do_not_modify_skin_text.ggUpdatePosition=function (useTransition) {
		}
		me._do_not_modify_skin.appendChild(me._do_not_modify_skin_text);
		el=me._config_button=document.createElement('div');
		els=me._config_button__img=document.createElement('img');
		els.className='ggskin ggskin_config_button';
		hs='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QHTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMj'+
			'UtMDktMDJUMTc6MTU6NTAtMDM6MDAiCiAgIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTAyVDE3OjE1OjUwLTAzOjAwIgogICB4bXA6Q3JlYXRvclRvb2w9IlBhbm8yVlIgNy4xLjExIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+/9sAQwD//////////////////////////////////////////////////////////////////////////////////////9sAQwH//////////////////////////////////////////////////////////////////////////////////////8AAEQgAHQAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYH'+
			'CAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4'+
			'iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8ASigUetABj3oo7UlACiikooAXtSUUUAf/2Q==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="config_button";
		el.ggDx=80;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 39px;';
		hs+='left : calc(50% - ((42px + 0px) / 2) + 80px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((39px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._config_button.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._config_button.ggUpdatePosition=function (useTransition) {
		}
		me._do_not_modify_skin.appendChild(me._config_button);
		me.divSkin.appendChild(me._do_not_modify_skin);
		el=me._full_screen_mobile=document.createElement('div');
		els=me._full_screen_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_full_screen_mobile';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5RjcwRDYwNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5RjcwRDYwMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp+Zcm0AAA3ySURBVHjazFoJUFRXFn3dNA224AYuuCQuuKBGCW4RUVwwKigiWmOCaMVlSKI1pTEZnIlVWkkGFCeOzpRjjSvBLeWUIq4Umhh0BBUjGiOKGyoSVDDIvj'+
			'RLzznPflaH2DRtxhp+1av+/fv99++5y7n3vt+aYcOGibZt23LoevTo4e3n5ze2Z8+eAzt06NBai0MIYRJN69Dk5+cX3bt3LyM9PT0ZI624uLgyNzdX6Orq6kRVVVUzX1/fuWFhYeEGg0EvmvgBxbtj9PDx8Qk+dOhQQnx8/Eaj0Vigq6mpcRw7duy8BQsWzFWTS0tLa/FR0rx5c5MGRxPCYaqoqDBBZhdXV1e9g4ODmDZtWgiM4bxv376vdAMHDvRevHhxuJqdmZl5HaY7DFd7COQa3tCUwPz0008myOf+2muvTXzrrbcG82JQUNDbLVq00OhCQkLGNmvWzJEXU1JSru3YsWOFp6fnvddff71JupjJZBKIF45UWGnlmDFjhjk7O2sR+z7awYMHD+SksrIy45EjRw6fOXPmHiYJnU7XJMHQ6/V6PT0oLzY29t+QtYqy'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="full screen mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 35px;';
		hs+='opacity : 0.69999;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._full_screen_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._full_screen_mobile.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._full_screen_mobile.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._full_screen_mobile);
		el=me._start_mobile=document.createElement('div');
		el.ggId="Start mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 1080px;';
		hs+='left : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1920px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._start_mobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._start_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._fundo_do_banner_1=document.createElement('div');
		el.ggId="fundo do banner_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #000000;';
		hs+='border : 1px solid #000000;';
		hs+='height : 10000px;';
		hs+='left : calc(50% - ((10000px + 2px) / 2) + 0px);';
		hs+='opacity : 0.60005;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((10000px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 10000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fundo_do_banner_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fundo_do_banner_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fundo_do_banner_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fundo_do_banner_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fundo_do_banner_1.style.transition='';
				if (me._fundo_do_banner_1.ggCurrentLogicStateVisible == 0) {
					me._fundo_do_banner_1.style.visibility=(Number(me._fundo_do_banner_1.style.opacity)>0||!me._fundo_do_banner_1.style.opacity)?'inherit':'hidden';
					me._fundo_do_banner_1.ggVisible=true;
				}
				else {
					me._fundo_do_banner_1.style.visibility="hidden";
					me._fundo_do_banner_1.ggVisible=false;
				}
			}
		}
		me._fundo_do_banner_1.logicBlock_visible();
		me._fundo_do_banner_1.ggUpdatePosition=function (useTransition) {
		}
		me._start_mobile.appendChild(me._fundo_do_banner_1);
		el=me._banner_mobile=document.createElement('div');
		els=me._banner_mobile__img=document.createElement('img');
		els.className='ggskin ggskin_banner_mobile';
		hs=basePath + 'images/banner_mobile.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="banner mobile";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.3,sy:0.3,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 1920px;';
		hs+='left : calc(50% - ((1080px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1920px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1080px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._banner_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._banner_mobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._banner_mobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._banner_mobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._banner_mobile.style.transition='';
				if (me._banner_mobile.ggCurrentLogicStateVisible == 0) {
					me._banner_mobile.style.visibility=(Number(me._banner_mobile.style.opacity)>0||!me._banner_mobile.style.opacity)?'inherit':'hidden';
					me._banner_mobile.ggVisible=true;
				}
				else {
					me._banner_mobile.style.visibility="hidden";
					me._banner_mobile.ggVisible=false;
				}
			}
		}
		me._banner_mobile.logicBlock_visible();
		me._banner_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-37;
		el.ggDy=205;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : calc(50% - ((246px + 0px) / 2) - 37px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((76px + 0px) / 2) + 205px);';
		hs+='visibility : inherit;';
		hs+='width : 246px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.onclick=function (e) {
			me._menu_mobile.style.transition='none';
			me._menu_mobile.style.visibility=(Number(me._menu_mobile.style.opacity)>0||!me._menu_mobile.style.opacity)?'inherit':'hidden';
			me._menu_mobile.ggVisible=true;
			me._menu_inferior.style.transition='none';
			me._menu_inferior.style.visibility=(Number(me._menu_inferior.style.opacity)>0||!me._menu_inferior.style.opacity)?'inherit':'hidden';
			me._menu_inferior.ggVisible=true;
			me._menu_lateral.style.transition='none';
			me._menu_lateral.style.visibility=(Number(me._menu_lateral.style.opacity)>0||!me._menu_lateral.style.opacity)?'inherit':'hidden';
			me._menu_lateral.ggVisible=true;
			me._start_mobile.style.transition='none';
			me._start_mobile.style.visibility='hidden';
			me._start_mobile.ggVisible=false;
			me._menu_open.style.transition='none';
			me._menu_open.style.visibility=(Number(me._menu_open.style.opacity)>0||!me._menu_open.style.opacity)?'inherit':'hidden';
			me._menu_open.ggVisible=true;
			me._menu_background.style.transition='none';
			me._menu_background.style.visibility=(Number(me._menu_background.style.opacity)>0||!me._menu_background.style.opacity)?'inherit':'hidden';
			me._menu_background.ggVisible=true;
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._banner_mobile.appendChild(me._rectangle_2);
		me._start_mobile.appendChild(me._banner_mobile);
		me.divSkin.appendChild(me._start_mobile);
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 70%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style.transition='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.logicBlock_alpha();
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_mobile=document.createElement('div');
		el.ggId="Menu mobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.7,sy:0.7,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 532px;';
		hs+='left : -58px;';
		hs+='position : absolute;';
		hs+='top : -140px;';
		hs+='visibility : inherit;';
		hs+='width : 312px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._menu_mobile.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._menu_mobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._m_image_2=document.createElement('div');
		els=me._m_image_2__img=document.createElement('img');
		els.className='ggskin ggskin_m_image_2';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBODdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBNzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkp5/vEAAAfxSURBVHja7N1faNVlGMDxsylCKdOrCCwIxbRILGERtlZR1GWiCcMirCSoG4UugvBSgsDA24xIwpYQ1i7LLsIxLA0yMyqTSVARdacpwXCu561XOZtn82'+
			'w7Zzvn9fOBp1f6M+E5fP39tvOnjrGxsUqz7N/Y0xVHT8w9MXfmuTVmWcziCtx4Lsaci/kj5uc838cMbRsYOt+s37Sj0aFH3Cvi6It5ImZ9zAKPLVzXaMw3MYdjDkb0Z1su9Ig7xbw55qWYB9LX9bjBjKUov4rZF3Mooh+d19Bz4M/GvBqz0uMDDTcc81bMgdkEP+PQI/LuOPbG3OuxgKb7NmZnxP71nIQegd8Ux+58m95p/zBnLufb+V0R/D9NCz0iXxVHf8zddg7z5oeYrRH7mXr/g85pRP5IHIMih3mXGjySm2xc6PEFN8XxSUyXHUNLWJqazG3O/tY9f6H9Fc+HQytKP4nfFrfxH8849Ij84TgGYhbZJ7SskZiNEfuRaYeef/A26HYd2kJ6+WzvZD+g65wk8vQUWr/IoW2kVvuj3ZvrDj28UfHTdWg3qdnddd26'+
			'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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 30px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 442px;';
		hs+='left : 30px;';
		hs+='position : absolute;';
		hs+='top : 153px;';
		hs+='visibility : inherit;';
		hs+='width : 219px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_image_2.ggUpdatePosition=function (useTransition) {
		}
		me._menu_mobile.appendChild(me._m_image_2);
		el=me._m_and_9=document.createElement('div');
		els=me._m_and_9__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_9';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_9.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("9.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node29}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node45}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node46}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node30}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_9.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_9_1=document.createElement('div');
		els=me._txt_9_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 9_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_9_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>9<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_9_1.ggUpdateText();
		el.appendChild(els);
		me._txt_9_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_9_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_9.appendChild(me._txt_9_1);
		me._menu_mobile.appendChild(me._m_and_9);
		el=me._m_and_8=document.createElement('div');
		els=me._m_and_8__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_8';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 175px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_8.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("8.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node28}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node44}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node47}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node31}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_8.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_8_1=document.createElement('div');
		els=me._txt_8_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 8_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_8_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>8<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_8_1.ggUpdateText();
		el.appendChild(els);
		me._txt_8_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_8_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_8.appendChild(me._txt_8_1);
		me._menu_mobile.appendChild(me._m_and_8);
		el=me._m_and_7=document.createElement('div');
		els=me._m_and_7__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_7';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 239px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_7.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("7.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node27}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node43}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node48}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node32}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_7.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_7_1=document.createElement('div');
		els=me._txt_7_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 7_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_7_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>7<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_7_1.ggUpdateText();
		el.appendChild(els);
		me._txt_7_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_7_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_7.appendChild(me._txt_7_1);
		me._menu_mobile.appendChild(me._m_and_7);
		el=me._m_and_6=document.createElement('div');
		els=me._m_and_6__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_6';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 239px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_6.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("6.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node26}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node42}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node49}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node33}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_6_1=document.createElement('div');
		els=me._txt_6_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 6_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_6_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>6<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_6_1.ggUpdateText();
		el.appendChild(els);
		me._txt_6_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_6_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_6.appendChild(me._txt_6_1);
		me._menu_mobile.appendChild(me._m_and_6);
		el=me._m_and_5=document.createElement('div');
		els=me._m_and_5__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_5';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 303px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_5.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("5.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node25}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node41}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node50}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node34}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_5_1=document.createElement('div');
		els=me._txt_5_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 5_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_5_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>5<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_5_1.ggUpdateText();
		el.appendChild(els);
		me._txt_5_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_5_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_5.appendChild(me._txt_5_1);
		me._menu_mobile.appendChild(me._m_and_5);
		el=me._m_and_4=document.createElement('div');
		els=me._m_and_4__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_4';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 303px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_4.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("4.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node24}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node40}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node51}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node35}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_4_1=document.createElement('div');
		els=me._txt_4_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -10px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_4_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>4<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_4_1.ggUpdateText();
		el.appendChild(els);
		me._txt_4_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_4_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_4.appendChild(me._txt_4_1);
		me._menu_mobile.appendChild(me._m_and_4);
		el=me._m_and_3=document.createElement('div');
		els=me._m_and_3__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_3';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 56px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 367px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_3.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("3.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node23}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node39}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node52}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node36}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_3_1=document.createElement('div');
		els=me._txt_3_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_3_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>3<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_3_1.ggUpdateText();
		el.appendChild(els);
		me._txt_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_3.appendChild(me._txt_3_1);
		me._menu_mobile.appendChild(me._m_and_3);
		el=me._m_and_2=document.createElement('div');
		els=me._m_and_2__img=document.createElement('img');
		els.className='ggskin ggskin_m_and_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA3CAYAAACxUDzgAAAKQ2lDQ1BJQ0MgcHJvZmlsZQAAeNqdU3dYk/cWPt/3ZQ9WQtjwsZdsgQAiI6wIyBBZohCSAGGEEBJAxYWIClYUFRGcSFXEgtUKSJ2I4qAouGdBiohai1VcOO4f3Ke1fXrv7e371/u855zn/M55zw+AERImkeaiagA5UoU8Otgfj09IxMm9gAIVSOAEIBDmy8JnBcUAAPADeXh+dLA//AGvbwACAHDVLiQSx+H/g7pQJlcAIJEA4CIS5wsBkFIAyC5UyBQAyBgAsFOzZAoAlAAAbHl8QiIAqg0A7PRJPgUA2KmT3BcA2KIcqQgAjQEAmShHJAJAuwBgVYFSLALAwgCgrEAiLgTArgGAWbYyRwKAvQUAdo5YkA9AYACAmUIszAAgOAIAQx4TzQMgTAOgMN'+
			'K/4KlfcIW4SAEAwMuVzZdL0jMUuJXQGnfy8ODiIeLCbLFCYRcpEGYJ5CKcl5sjE0jnA0zODAAAGvnRwf44P5Dn5uTh5mbnbO/0xaL+a/BvIj4h8d/+vIwCBAAQTs/v2l/l5dYDcMcBsHW/a6lbANpWAGjf+V0z2wmgWgrQevmLeTj8QB6eoVDIPB0cCgsL7SViob0w44s+/zPhb+CLfvb8QB7+23rwAHGaQJmtwKOD/XFhbnauUo7nywRCMW735yP+x4V//Y4p0eI0sVwsFYrxWIm4UCJNx3m5UpFEIcmV4hLpfzLxH5b9CZN3DQCshk/ATrYHtctswH7uAQKLDljSdgBAfvMtjBoLkQAQZzQyefcAAJO/+Y9AKwEAzZek4wAAvOgYXKiUF0zGCAAARKCBKrBBBwzBFKzADpzBHbzAFwJhBkRADCTAPBBCBuSAHAqh'+
			'GJZBGVTAOtgEtbADGqARmuEQtMExOA3n4BJcgetwFwZgGJ7CGLyGCQRByAgTYSE6iBFijtgizggXmY4EImFINJKApCDpiBRRIsXIcqQCqUJqkV1II/ItchQ5jVxA+pDbyCAyivyKvEcxlIGyUQPUAnVAuagfGorGoHPRdDQPXYCWomvRGrQePYC2oqfRS+h1dAB9io5jgNExDmaM2WFcjIdFYIlYGibHFmPlWDVWjzVjHVg3dhUbwJ5h7wgkAouAE+wIXoQQwmyCkJBHWExYQ6gl7CO0EroIVwmDhDHCJyKTqE+0JXoS+cR4YjqxkFhGrCbuIR4hniVeJw4TX5NIJA7JkuROCiElkDJJC0lrSNtILaRTpD7SEGmcTCbrkG3J3uQIsoCsIJeRt5APkE+S+8nD5LcUOsWI4kwJoiRSpJQSSjVlP+UEpZ8yQpmgqlHNqZ'+
			'7UCKqIOp9aSW2gdlAvU4epEzR1miXNmxZDy6Qto9XQmmlnafdoL+l0ugndgx5Fl9CX0mvoB+nn6YP0dwwNhg2Dx0hiKBlrGXsZpxi3GS+ZTKYF05eZyFQw1zIbmWeYD5hvVVgq9ip8FZHKEpU6lVaVfpXnqlRVc1U/1XmqC1SrVQ+rXlZ9pkZVs1DjqQnUFqvVqR1Vu6k2rs5Sd1KPUM9RX6O+X/2C+mMNsoaFRqCGSKNUY7fGGY0hFsYyZfFYQtZyVgPrLGuYTWJbsvnsTHYF+xt2L3tMU0NzqmasZpFmneZxzQEOxrHg8DnZnErOIc4NznstAy0/LbHWaq1mrX6tN9p62r7aYu1y7Rbt69rvdXCdQJ0snfU6bTr3dQm6NrpRuoW623XP6j7TY+t56Qn1yvUO6d3RR/Vt9KP1F+rv1u/RHzcwNAg2kBlsMThj8MyQ'+
			'Y+hrmGm40fCE4agRy2i6kcRoo9FJoye4Ju6HZ+M1eBc+ZqxvHGKsNN5l3Gs8YWJpMtukxKTF5L4pzZRrmma60bTTdMzMyCzcrNisyeyOOdWca55hvtm82/yNhaVFnMVKizaLx5balnzLBZZNlvesmFY+VnlW9VbXrEnWXOss623WV2xQG1ebDJs6m8u2qK2brcR2m23fFOIUjynSKfVTbtox7PzsCuya7AbtOfZh9iX2bfbPHcwcEh3WO3Q7fHJ0dcx2bHC866ThNMOpxKnD6VdnG2ehc53zNRemS5DLEpd2lxdTbaeKp26fesuV5RruutK10/Wjm7ub3K3ZbdTdzD3Ffav7TS6bG8ldwz3vQfTw91jicczjnaebp8LzkOcvXnZeWV77vR5Ps5wmntYwbcjbxFvgvct7YDo+PWX6zukDPsY+Ap96n4e+pr4i3z2+I3'+
			'7Wfpl+B/ye+zv6y/2P+L/hefIW8U4FYAHBAeUBvYEagbMDawMfBJkEpQc1BY0FuwYvDD4VQgwJDVkfcpNvwBfyG/ljM9xnLJrRFcoInRVaG/owzCZMHtYRjobPCN8Qfm+m+UzpzLYIiOBHbIi4H2kZmRf5fRQpKjKqLupRtFN0cXT3LNas5Fn7Z72O8Y+pjLk722q2cnZnrGpsUmxj7Ju4gLiquIF4h/hF8ZcSdBMkCe2J5MTYxD2J43MC52yaM5zkmlSWdGOu5dyiuRfm6c7Lnnc8WTVZkHw4hZgSl7I/5YMgQlAvGE/lp25NHRPyhJuFT0W+oo2iUbG3uEo8kuadVpX2ON07fUP6aIZPRnXGMwlPUit5kRmSuSPzTVZE1t6sz9lx2S05lJyUnKNSDWmWtCvXMLcot09mKyuTDeR55m3KG5OHyvfkI/lz89sVbIVM'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBOEE1NzNBNDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBOEE1NzNBMzdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PurYBX8AAASeSURBVHja7JtrTFNnGIC/nl5OL6dqLXRSqCsikA2p4yKiCPjDCS4ZcYq6YTITGbBLli1zYehmokvmDMgfsi3TAtliZBYVt5gM0Zgg6GCsMiyyDCpCEK'+
			'zcrNgbpxe77+NiOMgUumWTnu/5c36cpsn75H2/837J+3K8Xi/wBQ6HE02JyZSE6LBVIUsWhy+UikNIAZ/yeB4Kwf8Al0uM0k6XdcRi7+3rN3f8aript9rpWhhfm0/xzUUMlLFYqZDlbFgTlZUUG7E8LioUCEk+eBZxjDpB8x/d4Gpzh/H8FUPFwPCDUhjrvX9VDBRCqYMDC15/JTH3tZfjJRIRCeYTNgcNqi78ZtVVN37b3TdUBGO2/mMxXC43bfeWlK+yM1OVUokIzGcsNgcoP1PXV151+R2323PJJzEwSzihIYEH9uVl7FnzUjgH+BF1+nZvYem5Ypg9B7x/I2BGMdCJQBOpOlb48Rvb4MEK/JEe0zDIL/qh8oaxNw86cD5VDMqUlZFLy0o+e3OHfBEF/JkhswV88MVx3fX2nuzpmUNM/zEsn4Nf7tnh91IQATIp'+
			'QLHCD8v+6e8YYmAfsmlvbsZHS4PkgC2gWAtyXs3n8bgbZhQDK0i6a3NyydoY/zpoZ8O6uAgOjP0b1JY8JiZMpSjI3pqqBCwlZ9v6YHiM5DPEQFMB2zcl5lISIVu9ANSjbU9fnQddyB+JCQpchDpaMWA5WzauohTyBdljYtDnOT1ZkyUWCtjuBaCrTvo6zc7JjNHAAzcUYMZYGxOxHObKCgLWVmrsi2psZIK4KDWgxGQqkbgyLA72L9jIBCJ4pCREh8UTSoUsEutgogqShxMLpSIlVsFkASVSEgI+n8IqmJACHkWISD6JVTBxex5KCKxhZrAYLAaLwWKwGCwGi8FisBgsBovBYjBYzOzFOGgXjTUw4XEJG+F0uaxYBRPa6bYSD6wOE1bBZMRiNxF9/eY/sQomvXfvdRBNrbeaaacL25hglHaBptbOawRMm1o09okZR3'+
			'+jC6D5YPS5Nvzyu7ELKxmnocXYCR9tBJo9O19vqEADw2zHDh3UXDFUICdjDZ5p8L626qLewXYxZ2qabHeHRrSPOl8oaLCyulELa4u1UtBw9KmapmPQxTDjStB5e+BQ2ela1vY0Zacv37l1e+DwY3claMry/Y/17ze03PSyTcrV5g5veVXde1N3DAhmK+yqPnT0pxLY4LBGCpoQP6w9d8Tj8Vx44u26q3dw/ydHTuqG7/v/FQrFuLdYp4MxH5z+7km7BNqi/KzMYIXMX9t+ABOg8np7z+x2CabIIdTBgZ9/+nbGh/62fYLOFFg+xTBT5rZ9MhVSwE/btTn5691bU4L8YV9Je6rW9N3Z+nennylzFjORPVT488/ty0xbnYPmgefb6CvacDt7UW87+XOjtrtvsBDGPPLUmOe4ExmgVMje2pi0YmdSbMSymBfUz+xOJLol'+
			'o8tx/bX2zksNbSfuDJhLJ5u3WcXqyxYtGpqGj2hYWusTNMviVUvk4VKJUEUKeBKxkBSMv/7vQDHYR2kn7XTbYLn09PabjY0txskt2lZf/vMvAQYAg3L1T7FIBw8AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M and 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 152px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 367px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_and_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_and_2.onclick=function (e) {
			player.setVariableValue('Andar_atual', Number("2.00"));
			if (
				(
					((player.getVariableValue('Final_numero') == Number("1")))
				)
			) {
				player.openNext("{node22}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("2")))
				)
			) {
				player.openNext("{node38}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("3")))
				)
			) {
				player.openNext("{node53}","");
			}
			if (
				(
					((player.getVariableValue('Final_numero') == Number("4")))
				)
			) {
				player.openNext("{node37}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_and_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_2_1=document.createElement('div');
		els=me._txt_2_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt 2_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 69px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -9px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_2_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><h1>2<\/h1>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_2_1.ggUpdateText();
		el.appendChild(els);
		me._txt_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_and_2.appendChild(me._txt_2_1);
		me._menu_mobile.appendChild(me._m_and_2);
		el=me._m_final_do_ap_14=document.createElement('div');
		els=me._m_final_do_ap_14__img=document.createElement('img');
		els.className='ggskin ggskin_m_final_do_ap_14';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M Final do ap 1-4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 41px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_final_do_ap_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_final_do_ap_14.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("1.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node22}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node23}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node24}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node25}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node26}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node27}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node28}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node29}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_final_do_ap_14.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_14_1=document.createElement('div');
		els=me._final_14_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 1-4_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_14_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 1-4<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_14_1.ggUpdateText();
		el.appendChild(els);
		me._final_14_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_14_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_final_do_ap_14.appendChild(me._final_14_1);
		me._menu_mobile.appendChild(me._m_final_do_ap_14);
		el=me._m_final_do_ap_1417=document.createElement('div');
		els=me._m_final_do_ap_1417__img=document.createElement('img');
		els.className='ggskin ggskin_m_final_do_ap_1417';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M final do ap 14-17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 141px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 435px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_final_do_ap_1417.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_final_do_ap_1417.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("4.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node37}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node36}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node35}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node34}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node33}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node32}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node31}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node30}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_final_do_ap_1417.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_1417_1=document.createElement('div');
		els=me._final_1417_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 14-17_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -12px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_1417_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 14-17<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_1417_1.ggUpdateText();
		el.appendChild(els);
		me._final_1417_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_1417_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_final_do_ap_1417.appendChild(me._final_1417_1);
		me._menu_mobile.appendChild(me._m_final_do_ap_1417);
		el=me._m_final_do_ap_58=document.createElement('div');
		els=me._m_final_do_ap_58__img=document.createElement('img');
		els.className='ggskin ggskin_m_final_do_ap_58';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M final do ap 5-8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 141px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 485px;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_final_do_ap_58.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_final_do_ap_58.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("2.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node38}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node39}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node40}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node41}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node42}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node43}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node44}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node45}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_final_do_ap_58.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_58_1=document.createElement('div');
		els=me._final_58_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 5-8_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_58_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 5-8<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_58_1.ggUpdateText();
		el.appendChild(els);
		me._final_58_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_58_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_final_do_ap_58.appendChild(me._final_58_1);
		me._menu_mobile.appendChild(me._m_final_do_ap_58);
		el=me._m_final_do_ap_913=document.createElement('div');
		els=me._m_final_do_ap_913__img=document.createElement('img');
		els.className='ggskin ggskin_m_final_do_ap_913';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M final do ap 9-13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 41px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 485px;';
		hs+='visibility : inherit;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_final_do_ap_913.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_final_do_ap_913.onclick=function (e) {
			player.setVariableValue('Final_numero', Number("3.00"));
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("2")))
				)
			) {
				player.openNext("{node53}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("3")))
				)
			) {
				player.openNext("{node52}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("4")))
				)
			) {
				player.openNext("{node51}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("5")))
				)
			) {
				player.openNext("{node50}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("6")))
				)
			) {
				player.openNext("{node49}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("7")))
				)
			) {
				player.openNext("{node48}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("8")))
				)
			) {
				player.openNext("{node47}","");
			}
			if (
				(
					((player.getVariableValue('Andar_atual') == Number("9")))
				)
			) {
				player.openNext("{node46}","");
			}
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_final_do_ap_913.ggUpdatePosition=function (useTransition) {
		}
		el=me._final_913_1=document.createElement('div');
		els=me._final_913_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="final 9-13_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._final_913_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Final 9-13<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._final_913_1.ggUpdateText();
		el.appendChild(els);
		me._final_913_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._final_913_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_final_do_ap_913.appendChild(me._final_913_1);
		me._menu_mobile.appendChild(me._m_final_do_ap_913);
		el=me._m_apartamento=document.createElement('div');
		els=me._m_apartamento__img=document.createElement('img');
		els.className='ggskin ggskin_m_apartamento';
		hs='data:image/png;base64,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'+
			'0aO0Uq5QDhZML6greFsYW3i4SL1IWtQz32b+6vkjC4IWfL2QsFC4sLPYuHhZ8eAiv0W7FiOLUxd3LjFdUrpkeGnw0n3LaMuylv1Q4lhSVfJqedzyjlKD0qWlQyuCVzSVqZTJy26u9Fq5YxVhlWRV72qX1VtWfyoXlV+scKyorviwRrjm4ldOX9V89Xlt2treSrfK7etI66Trbqz3Wb+vSr1qQdXQhvANrRvxjeUbX21K3nShemr1js20zcrNAzVhNe1bzLas2/KhNqP2ep1/XctW/a2rt77ZJtrWv913e/MOgx0VO97vlOy8tSt4V2u9RX31btLugt2PGmIbur/mft24R3dPxZ6Pe6V7B/ZF7+tqdG9s3K+/v7IJbVI2jR5IOnDlm4Bv2pvtmne1cFoqDsJB5cEn36Z8e+NQ6KHOw9zDzd+Zf7f1COtIeSvSOr91rC'+
			'2jbaA9ob3v6IyjnR1eHUe+t/9+7zHjY3XHNY9XnqCdKD3x+eSCk+OnZKeenU4/PdSZ3Hn3TPyZa11RXb1nQ8+ePxd07ky3X/fJ897nj13wvHD0Ivdi2yW3S609rj1HfnD94UivW2/rZffL7Vc8rnT0Tes70e/Tf/pqwNVz1/jXLl2feb3vxuwbt24m3Ry4Jbr1+Hb27Rd3Cu5M3F16j3iv/L7a/eoH+g/qf7T+sWXAbeD4YMBgz8NZD+8OCYee/pT/04fh0kfMR9UjRiONj50fHxsNGr3yZM6T4aeypxPPyn5W/3nrc6vn3/3i+0vPWPzY8Av5i8+/rnmp83Lvq6mvOscjxx+8znk98ab8rc7bfe+477rfx70fmSj8QP5Q89H6Y8en0E/3Pud8/vwv94Tz+4A5JREAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdl'+
			'UmVhZHlxyWU8AAADhmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YX'+
			'AvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmJiMTllN2MzLWZiNWQtNDQyMS04MGQwLWNkMmMyYzhhNmM3OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjc3NzkxRTdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjc3NzkxRDdEM0IxMUYwQkQ3RDg2QUU3QkRBNEYyMiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3Ag'+
			'MjMuNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmE3YmNkYjY2LThkZTQtNGYwOS04ZGU3LWRjYzM3ZWI2MmExNSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVhMjViYTlhLTVlNDYtZTk0OS1iMTk2LWRmZTJkMDc2MDU0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptv+SL0AAAL+SURBVHja7JxdSFNRAMfvzvyo/MKZlTW3SbOHtiCtWBkxlWYzWy99WCZIpfQQQuJL4GvCeoio6KG0D7A0LXuZYm2hi3IgVgZtvSg518TEpuVH5de1c4'+
			'SGRkMDt3sf/j8YFy53L78f5557Hs6ROC1mLhBa00UpvezboUk5rE2V6xNlMUpCSMLqyAgOLM3PySmO53nf0PBYn7Pba3/r6rXQ26+o89lA/5H8KwgNQeJi1pw9krOrwpSZpkxVbYDdFaDb/YWz2Lv6Gq2dld/Hftyh7vklg9AYyTl7t9VfKDLuUSQlwGIQ8Az4uKv3Wxw2h/ME9f85YBAaQ3MuP9t2vmB/En01wVwQoa8y7mbti4Fb9a0G2sD15z5ZEENZcjzLVlqYgxghgDlmrkuOZVmpe8WiIGzyNmRoH5WeMiRBVWgpLTRspFNEHW0g8QeJj40qLj99cDdGhjAjpazImCGLiy6Yn0PoL7z4aOYnOonLoUc4rtU8d1c1tG1hQyLXlJ2OGAKTp9+uohcj2alNyducvA5GBEatWM+lb1XlEY1aroMOcaBNlevI2vgY'+
			'BVSIg0RZrJKESUk8VIgDKW1BIsLDYEIkRNIWWHiIbV0CBQgCEARBAIIgCEAQBAEIgiAAQQCCIAhAEAQBCIIgIKRBpqZnYEEkTNIWZGaWH4EKcTBLW5CvI2MeqBAHQ8OjfcTV4+2ACnHg7PZ2kDfO3qYezyBsCAxr8O6ju5l9ZT1rauvyQomwNNvfu1kL4rSYpxutnZf6B4dhRSCY+6e2zgrWYn4dMjI6UX3lXouD7XsDoYU5Z+5938br/AtDtm/a2v7h5I0Htn4oCi3Xa6xe5p42mFu0Uqc3PFWP2w7QBwYwUkIzMpjr6id2I3PvX6kv+uyymF23G1p15Zdr29leahAcmNsy88PXzPXCLdGMgCc5REetOpOfq6s4pE9T4SSHlYGd5ND0sstd39JROT7x6+6yTnL4K4z/rBONepOebSjh+Tkc7/AfECLxsRW4q6d/WW'+
			'ed/BZgAHjZLRUCQLLJAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 20px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="M apartamento";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 41px;';
		hs+='left : 73px;';
		hs+='opacity : 0.9;';
		hs+='position : absolute;';
		hs+='top : 534px;';
		hs+='visibility : inherit;';
		hs+='width : 132px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._m_apartamento.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._m_apartamento.onclick=function (e) {
			player.openNext("{node1}","");
			me._menu_open.onclick.call(me._menu_open);
			me._menu_background.onclick.call(me._menu_background);
		}
		me._m_apartamento.ggUpdatePosition=function (useTransition) {
		}
		el=me._txt_apartamento_1=document.createElement('div');
		els=me._txt_apartamento_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="txt apartamento_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(150,74,55,1);';
		hs+='height : 37px;';
		hs+='left : 7px;';
		hs+='position : absolute;';
		hs+='top : -6px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._txt_apartamento_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("<div class=\"ggmarkdown\"><p><strong>Apartamento<\/strong><\/p>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._txt_apartamento_1.ggUpdateText();
		el.appendChild(els);
		me._txt_apartamento_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._txt_apartamento_1.ggUpdatePosition=function (useTransition) {
		}
		me._m_apartamento.appendChild(me._txt_apartamento_1);
		me._menu_mobile.appendChild(me._m_apartamento);
		me._menu_background.appendChild(me._menu_mobile);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgaWQ9IkxheWVyXzEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbC1vcGFjaXR5PSIxIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZlcnNpb249IjEuMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzIgMzI7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy'+
			'53My5vcmcvMTk5OS94bGluayIgZmlsbD0iI2ZmZmZmZiI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style.transition='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='5px';
					me._menu_open.style.top='5px';
				}
			}
		}
		me._menu_open.logicBlock_position();
		me._menu_open.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		me._instrucoes_desktop.logicBlock_visible();
		me._instrucoes_mobile.logicBlock_visible();
		me._controller.logicBlock_position();
		me._controller.logicBlock_alpha();
		me.elementMouseOver['controller']=false;
		me._controller_bg.logicBlock_position();
		me._controller_bg.logicBlock_size();
		me._controller_bg.logicBlock_visible();
		me._controller_slider.logicBlock_position();
		me._controller_slider.logicBlock_alpha();
		me._enter_vr.logicBlock_position();
		me._enter_vr.logicBlock_visible();
		me.elementMouseOver['enter_vr']=false;
		me._fullscreen_buttons.logicBlock_position();
		me._fullscreen_buttons.logicBlock_visible();
		me._fullscreen.logicBlock_alpha();
		me.elementMouseOver['fullscreen']=false;
		me._fullscreen_off.logicBlock_alpha();
		me.elementMouseOver['fullscreen_off']=false;
		me._gyro.logicBlock_position();
		me._gyro.logicBlock_visible();
		me._gyro_on.logicBlock_alpha();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_off.logicBlock_alpha();
		me.elementMouseOver['gyro_off']=false;
		me._thumbnail.logicBlock_position();
		me._thumbnail.logicBlock_visible();
		me._thumbnail_hide_button_show.logicBlock_alpha();
		me.elementMouseOver['thumbnail_hide_button_show']=false;
		me._thumbnail_show_button_show.logicBlock_alpha();
		me.elementMouseOver['thumbnail_show_button_show']=false;
		me._info.logicBlock_position();
		me._info.logicBlock_visible();
		me.elementMouseOver['info']=false;
		me._autorotate_buttons.logicBlock_position();
		me._autorotate_buttons.logicBlock_visible();
		me._autorotate_start.logicBlock_alpha();
		me.elementMouseOver['autorotate_start']=false;
		me._autorotate_stop.logicBlock_alpha();
		me.elementMouseOver['autorotate_stop']=false;
		me._zoomout.logicBlock_visible();
		me.elementMouseOver['zoomout']=false;
		me._zoomin.logicBlock_visible();
		me.elementMouseOver['zoomin']=false;
		me._video_1.ggVideoSource = 'oqurah0-Rew';
		me._video_1.ggVideoNotLoaded = true;
		me._fundo_do_banner.logicBlock_visible();
		me._banner.logicBlock_visible();
		me._fundo_do_banner_1.logicBlock_visible();
		me._banner_mobile.logicBlock_visible();
		me._menu_background.logicBlock_alpha();
		me._menu_open.logicBlock_position();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
		});
		player.addListener('autorotatechanged', function(event) {
			me._autorotate_start.logicBlock_alpha();
			me._autorotate_stop.logicBlock_alpha();
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._controller.logicBlock_position();
			me._controller.logicBlock_alpha();
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
			me._controller_slider.logicBlock_alpha();
			me._enter_vr.logicBlock_position();
			me._fullscreen_buttons.logicBlock_position();
			me._fullscreen_buttons.logicBlock_visible();
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
			me._thumbnail.logicBlock_position();
			me._thumbnail.logicBlock_visible();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			me._autorotate_buttons.logicBlock_position();
			me._autorotate_buttons.logicBlock_visible();
			me._autorotate_start.logicBlock_alpha();
			me._autorotate_stop.logicBlock_alpha();
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
			me._menu_background.logicBlock_alpha();
			me._menu_open.logicBlock_position();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			me._instrucoes_desktop.logicBlock_visible();
			me._instrucoes_mobile.logicBlock_visible();
			me._controller.logicBlock_position();
			me._controller.logicBlock_alpha();
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
			me._controller_slider.logicBlock_alpha();
			me._enter_vr.logicBlock_position();
			me._fullscreen_buttons.logicBlock_position();
			me._fullscreen_buttons.logicBlock_visible();
			me._gyro.logicBlock_position();
			me._gyro.logicBlock_visible();
			me._thumbnail.logicBlock_position();
			me._thumbnail.logicBlock_visible();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._info.logicBlock_position();
			me._info.logicBlock_visible();
			me._autorotate_buttons.logicBlock_position();
			me._autorotate_buttons.logicBlock_visible();
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
			me._fundo_do_banner.logicBlock_visible();
			me._banner.logicBlock_visible();
			player.setVariableValue('Andar_atual', Number("9.00"));
			player.setVariableValue('Final_numero', Number("1.00"));
			me._fundo_do_banner_1.logicBlock_visible();
			me._banner_mobile.logicBlock_visible();
			me._menu_background.logicBlock_alpha();
			me._menu_open.logicBlock_position();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_off.logicBlock_alpha();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen.logicBlock_alpha();
			me._fullscreen_off.logicBlock_alpha();
		});
		player.addListener('gyroavailable', function(event) {
			me._gyro.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_on.logicBlock_alpha();
			me._gyro_off.logicBlock_alpha();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('pos_controller', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_controller', player.getVariableValue('pos_controller') + Number("1"));
			}
			player.setVariableValue('pos_enter_vr', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getIsTour() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_fullscreen', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.hasVR() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_enter_vr', player.getVariableValue('pos_enter_vr') + Number("1"));
			}
			player.setVariableValue('pos_fullscreen', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getIsTour() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_gyro', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true)) && 
					((player.getOS() != 4))
				)
			) {
				player.setVariableValue('pos_fullscreen', player.getVariableValue('pos_fullscreen') + Number("1"));
			}
			player.setVariableValue('pos_gyro', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_thumbnail', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getIsTour() == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_projection', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true)) && 
					((player.getGyroAvailable() == true))
				)
			) {
				player.setVariableValue('pos_gyro', player.getVariableValue('pos_gyro') + Number("1"));
			}
			player.setVariableValue('pos_thumbnail', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			if (
				(
					((player.getVariableValue('opt_info', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_thumbnail', player.getVariableValue('pos_thumbnail') + Number("1"));
			}
			player.setVariableValue('pos_information', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("2"));
			}
			if (
				(
					((player.getVariableValue('opt_autorotate', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_information', player.getVariableValue('pos_information') + Number("1"));
			}
			player.setVariableValue('pos_autorotate', Number("0"));
			if (
				(
					((player.getVariableValue('opt_zoom', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) == true))
				)
			) {
				player.setVariableValue('pos_autorotate', player.getVariableValue('pos_autorotate') + Number("2"));
			}
		});
		player.addListener('sizechanged', function(event) {
			me._fullscreen_buttons.logicBlock_visible();
			me._gyro.logicBlock_visible();
			me._thumbnail.logicBlock_visible();
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
			me._info.logicBlock_visible();
			me._autorotate_buttons.logicBlock_visible();
			me._zoomout.logicBlock_visible();
			me._zoomin.logicBlock_visible();
		});
		player.addListener('varchanged_opt_hotspot_preview', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_opt_hotspot_preview();
				}
			}
		});
		player.addListener('varchanged_pos_autorotate', function(event) {
			me._autorotate_buttons.logicBlock_position();
		});
		player.addListener('varchanged_pos_controller', function(event) {
			me._controller_bg.logicBlock_position();
			me._controller_bg.logicBlock_size();
			me._controller_bg.logicBlock_visible();
			me._controller_slider.logicBlock_position();
		});
		player.addListener('varchanged_pos_enter_vr', function(event) {
			me._enter_vr.logicBlock_position();
		});
		player.addListener('varchanged_pos_fullscreen', function(event) {
			me._fullscreen_buttons.logicBlock_position();
		});
		player.addListener('varchanged_pos_gyro', function(event) {
			me._gyro.logicBlock_position();
		});
		player.addListener('varchanged_pos_information', function(event) {
			me._info.logicBlock_position();
		});
		player.addListener('varchanged_pos_thumbnail', function(event) {
			me._thumbnail.logicBlock_position();
		});
		player.addListener('varchanged_vis_image_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_image_popup();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_info_popup();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_thumbnail_menu', function(event) {
			me._menu_background.logicBlock_alpha();
			me._menu_open.logicBlock_position();
		});
		player.addListener('varchanged_vis_thumbnail_menu_mobile', function(event) {
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_thumbnail_menu_show', function(event) {
			me._thumbnail_hide_button_show.logicBlock_alpha();
			me._thumbnail_show_button_show.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_timer', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_timer();
				}
			}
			me._controller.logicBlock_alpha();
			me._controller_slider.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_userdata', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_userdata();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_video_popup_file', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_file();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_video_popup_url', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_url();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_video_popup_vimeo', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_vimeo();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_video_popup_youtube', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_video_popup_youtube();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('varchanged_vis_website', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_website();
				}
			}
			me._controller.logicBlock_position();
		});
		player.addListener('vrchanged', function(event) {
			me._enter_vr.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
				else {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_timer') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._ht_node.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._ht_node.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._ht_node.style.transition='opacity 500ms ease 0ms';
				if (me._ht_node.ggCurrentLogicStateAlpha == 0) {
					me._ht_node.style.visibility=me._ht_node.ggVisible?'inherit':'hidden';
					me._ht_node.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._ht_node.style.opacity == 0.0) { me._ht_node.style.visibility="hidden"; } }, 505);
					me._ht_node.style.opacity=0;
				}
			}
		}
		me._ht_node.logicBlock_alpha();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			me._tt_ht_node.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDFjLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYuMS0xNDQsMzQxLTE3NSwzNDF6IE0tMTY3LjksMzY2LjZjMC41LTAuNSwxLjQtMC41LDIsMGwxLjIsMS4yYzAuNSwwLjUsMC41LDEuNCwwLDJsLTI1LjMsMjUuM2MtMC41LDAuNS0xLjcsMS41LTIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC44LDAuMS0xLjEsMGMtMC4zLTAuMS0xLjQt'+
			'MS0yLTEuNWwtNy44LTcuOGMtMC41LTAuNS0wLjUtMS40LDAtMmwxLjItMS4yYzAuNS0wLjUsMS40LTAuNSwyLDBsNy4yLDcuMkwtMTY3LjksMzY2LjZ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTQuOSwzOTRjMC4zLTAuMywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsOC43LDguNXYxMS40Yy03LjYtMi43LTE2LjctNC4zLTI2LjMtNC43TC0xNTQuOSwzOTR6IE0tMTU0LjYsMzgzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4zLTAuNCw0LjQsMC42LDQuNywyLjNjMC4zLDEuNy0xLjMsMy40LTMuNSwzLjljLTIuMywwLjQtNC40LTAuNi00LjctMi4zQy0xNTguNCwzODUuMi0xNTYuOS'+
			'wzODMuNS0xNTQuNiwzODN6IE0tMTczLDQwOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLTEuMywwLTIsMGMtMTEuMSwwLTIyLDEuNy0zMC44LDQuOHYtNi43YzguNS0xLjQsMTkuNC0yLjMsMzAuOC0yLjNjMi4xLDAsNC4xLDAsNi4yLDAuMUwtMTczLDQwOS4yeiBNLTE2Nyw0MDMuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjYtMC4xLTUuMy0wLjEtOC0wLjFjLTUuNCwwLTEwLjcsMC4yLTE1LjcsMC41bDE0LjItMTMuOWMwLjktMC45LDIuNC0wLjksMy4zLDBsMTAsOS43TC0xNjcsNDAzLjR6IE0tMTM3LjksNDIwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjgtMC40LDEuNS0xLjEsMS45'+
			'Yy0wLjcsMC40LTEuNSwwLjUtMi4yLDAuMWMtOC43LTQuMi0yMS02LjYtMzMuOC02LjZzLTI1LjIsMi40LTMzLjgsNi42Yy0wLjMsMC4yLTAuNiwwLjItMSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAtMC44LTAuMS0xLjItMC4zYy0wLjctMC40LTEuMS0xLjEtMS4xLTEuOXYtNDUuOGMwLTAuOCwwLjQtMS41LDEuMS0xLjljMC43LTAuNCwxLjUtMC41LDIuMi0wLjFjNywzLjQsMTYuNCw1LjYsMjYuNSw2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNC4xLDQuMWMtNy44LTAuOS0xNS4xLTIuNi0yMS4xLTV2MzguOWM4LjktMy42LDIwLjYtNS42LDMyLjYtNS42YzEyLDAsMjMuNiwyLDMyLj'+
			'YsNS42di0zOC45Yy04LjksMy42LTIwLjYsNS42LTMyLjYsNS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuNSwwLTAuNywwbDQuNi00LjZjMTEuNC0wLjQsMjIuMi0yLjcsMzAtNi41YzAuNy0wLjMsMS41LTAuMywyLjIsMC4xYzAuNywwLjQsMS4xLDEuMSwxLjEsMS45TC0xMzcuOSw0MjBMLTEzNy45LDQyMHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE3Ni41LDM4OS45bC0xNC4yLDEzLjljNS0wLjMsMTAuMy0wLjUsMTUuNy0wLjVjMi43LDAsNS4zLDAsOCwwLjFsMy44LTMuN2wtMTAt'+
			'OS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc0LjEsMzg5LTE3NS42LDM4OS0xNzYuNSwzODkuOXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTIwNS44LDQwNy4zdjYuN2M4LjgtMy4xLDE5LjYtNC44LDMwLjgtNC44YzAuNywwLDEuMywwLDIsMGw0LjItNC4xYy0yLTAuMS00LjEtMC4xLTYuMi0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODYuMyw0MDUtMTk3LjMsNDA1LjgtMjA1LjgsNDA3LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNDQuMiw0MTMuOXYtMTEuNGwtOC43LTguNW'+
			'MtMC4zLTAuMy0wLjYtMC40LTEtMC40Yy0wLjQsMC0wLjcsMC4xLTEsMC40bC0xNS42LDE1LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjAuOSw0MDkuNi0xNTEuOCw0MTEuMy0xNDQuMiw0MTMuOXoiLz4KICAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE1My40LDM4OS4yYzIuMy0wLjQsMy45LTIuMiwzLjUtMy45Yy0wLjMtMS43LTIuNC0yLjctNC43LTIuM2MtMi4zLDAuNC0zLjksMi4yLTMuNSwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTcuOCwzODguNi0xNTUuNywzODkuNi0xNTMuNCwzODkuMnoiLz4KICAgPHBhdGggZmlsbC1vcGFj'+
			'aXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE5OS44LDM4NC4yYy0wLjUtMC41LTEuNC0wLjUtMiwwbC0xLjIsMS4yYy0wLjUsMC41LTAuNSwxLjQsMCwybDcuOCw3LjhjMC41LDAuNSwxLjcsMS41LDIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjMsMC4xLDAuOCwwLjEsMS4xLDBjMC4zLTAuMSwxLjQtMSwyLTEuNWwyNS4zLTI1LjNjMC41LTAuNSwwLjUtMS40LDAtMmwtMS4yLTEuMmMtMC41LTAuNS0xLjQtMC41LTIsMGwtMjQuNywyNC43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMTk5LjgsMzg0LjJ6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZm'+
			'ZmZiIgZD0iTS0xMzksMzcyLjNjLTAuNy0wLjQtMS41LTAuNS0yLjItMC4xYy03LjgsMy44LTE4LjYsNi4xLTMwLDYuNWwtNC42LDQuNmMwLjIsMCwwLjUsMCwwLjcsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMTIsMCwyMy42LTIsMzIuNi01LjZ2MzguOWMtOC45LTMuNi0yMC42LTUuNi0zMi42LTUuNnMtMjMuNiwyLTMyLjYsNS42di0zOC45YzYsMi40LDEzLjMsNC4xLDIxLjEsNWw0LjEtNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMTAuMS0wLjctMTkuNS0yLjktMjYuNS02LjNjLTAuNy0wLjMtMS41LTAuMy0yLjIsMC4xYy0wLjcsMC40LTEuMSwxLjEtMS4xLDEuOVY0MjBjMCww'+
			'LjgsMC40LDEuNSwxLjEsMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4yLDAuOCwwLjMsMS4yLDAuM2MwLjMsMCwwLjctMC4xLDEtMC4yYzguNy00LjIsMjEtNi42LDMzLjgtNi42YzEyLjgsMCwyNS4yLDIuNCwzMy44LDYuNmMwLjcsMC4zLDEuNSwwLjMsMi4yLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC43LTAuNCwxLjEtMS4xLDEuMS0xLjl2LTQ1LjhDLTEzNy45LDM3My40LTEzOC4zLDM3Mi43LTEzOSwzNzIuM3oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_visited__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBiYXNlUHJvZmlsZT0idGlueSIgeD0iMHB4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzMzQuN2MtMzQuNCwwLTYyLjQsMjcuOS02Mi40LDYyLjRjMCwzNC40LDI3LjksNjIuNCw2Mi40LDYyLjRzNjIuNC0yNy45LDYyLjQtNjIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTIuNiwzNjIuNy0xNDAuNiwzMzQuNy0xNzUsMzM0Ljd6IE0tMTY3LjEsMzYzLjJjMC42LTAuNiwxLjYtMC42LDIuMiwwbDEuMywxLjNjMC42LDAuNiwwLjYsMS42LDAsMi4ybC0yOC4yLDI4LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAuNi0xLjksMS42LTIuMiwxLjdjLTAuMywwLjEtMC45LDAuMS0x'+
			'LjMsMGMtMC4zLTAuMS0xLjYtMS4xLTIuMi0xLjdsLTguNi04LjZjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmwxLjMtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjYtMC42LDIuMiwwbDgsOEwtMTY3LjEsMzYzLjJ6IE0tMTUyLjcsMzkzLjdjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDkuNiw5LjR2MTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy04LjQtMy0xOC42LTQuOC0yOS4yLTUuMkwtMTUyLjcsMzkzLjd6IE0tMTUyLjMsMzgxLjVjMi41LTAuNSw0LjksMC42LDUuMywyLjVjMC40LDEuOS0xLjQsMy44LTMuOSw0LjNjLTIuNSwwLjUtNC45LTAuNi01Lj'+
			'MtMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1Ni42LDM4My45LTE1NC44LDM4Mi0xNTIuMywzODEuNXogTS0xNzIuOCw0MTAuNWMtMC43LDAtMS41LDAtMi4yLDBjLTEyLjQsMC0yNC41LDEuOS0zNC4yLDUuM3YtNy40YzkuNC0xLjYsMjEuNi0yLjUsMzQuMi0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjMsMCw0LjYsMCw2LjksMC4xTC0xNzIuOCw0MTAuNXogTS0xNjYuMiw0MDQuMWMtMi45LTAuMS01LjktMC4yLTguOC0wLjJjLTYsMC0xMS44LDAuMi0xNy40LDAuNmwxNS44LTE1LjRjMS0xLDIuNi0xLDMuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTEuMSwxMC44TC0xNjYuMiw0MDQuMXog'+
			'TS0xMzMuOCw0MjIuNWMwLDAuOS0wLjQsMS43LTEuMiwyLjFjLTAuNywwLjUtMS42LDAuNS0yLjQsMC4xYy05LjYtNC42LTIzLjMtNy4zLTM3LjYtNy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTI4LDIuNy0zNy42LDcuM2MtMC4zLDAuMi0wLjcsMC4yLTEuMSwwLjJjLTAuNSwwLTAuOS0wLjEtMS4zLTAuNGMtMC43LTAuNS0xLjItMS4zLTEuMi0yLjF2LTUwLjljMC0wLjksMC40LTEuNywxLjItMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTAuNSwxLjYtMC41LDIuNC0wLjFjNy44LDMuOCwxOC4yLDYuMiwyOS40LDdsLTQuNiw0LjZjLTguNi0wLjktMTYuNy0yLjgtMjMuNC01LjV2NDMuMmM5Lj'+
			'ktNCwyMi45LTYuMiwzNi4yLTYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czI2LjMsMi4yLDM2LjIsNi4ydi00My4yYy05LjksNC0yMi45LDYuMi0zNi4yLDYuMmMtMC4zLDAtMC41LDAtMC44LDBsNS4xLTUuMWMxMi43LTAuNSwyNC43LTMsMzMuMy03LjJjMC44LTAuNCwxLjctMC4zLDIuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC41LDEuMiwxLjMsMS4yLDIuMUwtMTMzLjgsNDIyLjVMLTEzMy44LDQyMi41eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMTc2LjYsMzg5LjFsLTE1LjgsMTUu'+
			'NGM1LjYtMC40LDExLjQtMC42LDE3LjQtMC42YzMsMCw1LjksMC4xLDguOCwwLjJsNC4yLTQuMWwtMTEuMS0xMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTc0LDM4OC4xLTE3NS42LDM4OC4xLTE3Ni42LDM4OS4xeiIvPgogICA8cGF0aCBmaWxsLW9wYWNpdHk9IjEiIGZpbGw9IiNmZmZmZmYiIGQ9Ik0tMjA5LjIsNDA4LjR2Ny40YzkuNy0zLjQsMjEuOC01LjMsMzQuMi01LjNjMC43LDAsMS41LDAsMi4yLDBsNC42LTQuNWMtMi4zLTAuMS00LjYtMC4xLTYuOS0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODcuNiw0MDUuOS0xOTkuNyw0MDYuOC0yMDkuMiw0MDguNHoiLz4KIC'+
			'AgPHBhdGggZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIiBkPSJNLTE0MC44LDQxNS44di0xMi43bC05LjYtOS40Yy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xNy4zLDE2LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTkuNCw0MTEtMTQ5LjIsNDEyLjktMTQwLjgsNDE1Ljh6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xNTEsMzg4LjNjMi41LTAuNSw0LjMtMi40LDMuOS00LjNjLTAuNC0xLjktMi43LTMtNS4zLTIuNWMtMi41LDAuNS00LjMsMi40LTMuOSw0LjMmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5OyYjeDk7Qy0xNTUuOSwzODcuNy0xNTMuNSwzODguOC0xNTEsMzg4LjN6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0yMDIuNiwzODIuN2MtMC42LTAuNi0xLjYtMC42LTIuMiwwbC0xLjMsMS4zYy0wLjYsMC42LTAuNiwxLjYsMCwyLjJsOC42LDguNmMwLjYsMC42LDEuOSwxLjYsMi4yLDEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC4zLDAuMSwwLjksMC4xLDEuMywwYzAuMy0wLjEsMS42LTEuMSwyLjItMS43bDI4LjItMjguMmMwLjYtMC42LDAuNi0xLjYsMC0yLjJsLTEuMy0xLjNjLTAuNi0wLjYtMS42LTAuNi0yLjIsMGwtMjcuNSwyNy'+
			'41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wtMjAyLjYsMzgyLjd6Ii8+CiAgIDxwYXRoIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiIgZD0iTS0xMzUsMzY5LjVjLTAuNy0wLjUtMS42LTAuNS0yLjQtMC4xYy04LjcsNC4yLTIwLjYsNi43LTMzLjMsNy4ybC01LjEsNS4xYzAuMywwLDAuNSwwLDAuOCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxMy4zLDAsMjYuMy0yLjIsMzYuMi02LjJ2NDMuMmMtOS45LTQtMjIuOS02LjItMzYuMi02LjJzLTI2LjMsMi4yLTM2LjIsNi4ydi00My4yYzYuNywyLjcsMTQuOCw0LjYsMjMuNCw1LjVsNC42LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'JiN4OTtjLTExLjItMC44LTIxLjctMy4zLTI5LjQtN2MtMC44LTAuNC0xLjctMC4zLTIuNCwwLjFjLTAuNywwLjUtMS4yLDEuMy0xLjIsMi4xdjUwLjljMCwwLjksMC40LDEuNywxLjIsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjQsMC4zLDAuOSwwLjQsMS4zLDAuNGMwLjQsMCwwLjctMC4xLDEuMS0wLjJjOS42LTQuNiwyMy4zLTcuMywzNy42LTcuM2MxNC4zLDAsMjgsMi43LDM3LjYsNy4zYzAuOCwwLjQsMS43LDAuMywyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O3MxLjItMS4zLDEuMi0yLjF2LTUwLjlDLTEzMy44LDM3MC44LTEzNC4zLDM3MC0xMzUsMzY5LjV6Ii8+Ci'+
			'AgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style.transition='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_visited.onmouseenter=function (e) {
			me._ht_node_visited__img.style.visibility='hidden';
			me._ht_node_visited__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_visited']=true;
		}
		me._ht_node_visited.onmouseleave=function (e) {
			me._ht_node_visited__img.style.visibility='inherit';
			me._ht_node_visited__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_visited']=false;
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._ht_node_visited);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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'+
			'/wPZQ9cnEn0f3QAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._image_1);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_customimage.ggSubElement.setAttribute('alt', player._(me._ht_node_customimage.ggAltText));
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_customimage.ggText_untranslated = img;
			me._ht_node_customimage.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_customimage.ggSubElement.style.width = '0px';
			me._ht_node_customimage.ggSubElement.style.height = '0px';
			me._ht_node_customimage.ggSubElement.src='';
			me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_customimage.ggText != player._(me._ht_node_customimage.ggText_untranslated)) {
				me._ht_node_customimage.ggText = player._(me._ht_node_customimage.ggText_untranslated);
				me._ht_node_customimage.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style.transition='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage.ggSubElement.src='';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.logicBlock_visible();
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentWidth < me._ht_node_customimage.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_customimage.scrollLeft=currentWidth / 2 - me._ht_node_customimage.clientWidth / 2;
			}
			if (!me._ht_node_customimage.ggScrollbars || currentHeight < me._ht_node_customimage.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_customimage.scrollTop=currentHeight / 2 - me._ht_node_customimage.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -130px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style.transition='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.logicBlock_visible();
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_preview_picture_frame_=document.createElement('div');
		el.ggId="ht_preview_picture_frame ";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_picture_frame_);
		el=me._ht_preview_nodeimage=document.createElement('div');
		els=me._ht_preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_preview_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_preview_nodeImage";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._ht_preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_preview_nodeimage);
		el=me._ht_tooltip=document.createElement('div');
		els=me._ht_tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 5px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.470588);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 2px 2px 2px 2px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_tooltip.style.transition='';
				if (me._ht_tooltip.ggCurrentLogicStateVisible == 0) {
					me._ht_tooltip.style.visibility="hidden";
					me._ht_tooltip.ggVisible=false;
				}
				else {
					me._ht_tooltip.style.visibility=(Number(me._ht_tooltip.style.opacity)>0||!me._ht_tooltip.style.opacity)?'inherit':'hidden';
					me._ht_tooltip.ggVisible=true;
				}
			}
		}
		me._ht_tooltip.logicBlock_visible();
		me._ht_tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_tooltip);
		el=me._ht_checkmark_tick=document.createElement('div');
		els=me._ht_checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHk9IjBweCIgaWQ9IkxheWVyXzEiIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtMjQwIDMzMiAxMzAgMTMwOyIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3Ln'+
			'czLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNmZmZmZmY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXog'+
			'TS0xMzIuOCwzODEuN2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIvPgogIDxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy'+
			'0yLjQsMGwtMTIuNSwxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 7px;';
		hs+='top : 7px;';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_checkmark_tick.ggElementNodeId()) == true)) || 
				((me._ht_checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_checkmark_tick.style.transition='';
				if (me._ht_checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._ht_checkmark_tick.style.visibility=(Number(me._ht_checkmark_tick.style.opacity)>0||!me._ht_checkmark_tick.style.opacity)?'inherit':'hidden';
					me._ht_checkmark_tick.ggVisible=true;
				}
				else {
					me._ht_checkmark_tick.style.visibility="hidden";
					me._ht_checkmark_tick.ggVisible=false;
				}
			}
		}
		me._ht_checkmark_tick.logicBlock_visible();
		me._ht_checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._ht_checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 2px 4px 2px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_node.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_node.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_node.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					me._tt_ht_node.style.left = 'calc(50% - (0px / 2))';
					me._tt_ht_node.style.top='-47px';
				}
				else {
					me._tt_ht_node.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._tt_ht_node.style.top='24px';
				}
			}
		}
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style.transition='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.logicBlock_visible();
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._tt_ht_node);
		me._ht_node.logicBlock_visible();
		me._ht_node.logicBlock_alpha();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_visited.logicBlock_visible();
		me.elementMouseOver['ht_node_visited']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_customimage.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_customimage.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_customimage.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_customimage.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_customimage.logicBlock_visible();
		me._hotspot_preview.logicBlock_visible();
		me._ht_tooltip.logicBlock_visible();
		me._ht_checkmark_tick.logicBlock_visible();
		me._tt_ht_node.logicBlock_position();
		me._tt_ht_node.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited.logicBlock_visible();
				me._ht_checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node.logicBlock_alpha();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_customimage.logicBlock_visible();
				me._hotspot_preview.logicBlock_visible();
				me._ht_tooltip.logicBlock_visible();
				me._tt_ht_node.logicBlock_position();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._tt_ht_node.logicBlock_position();
			};
			me.ggEvent_varchanged_opt_hotspot_preview=function() {
				me._hotspot_preview.logicBlock_visible();
				me._tt_ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_popup=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_timer=function() {
				me._ht_node.logicBlock_alpha();
			};
			me.ggEvent_varchanged_vis_userdata=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_file=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_url=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_vimeo=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_video_popup_youtube=function() {
				me._ht_node.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_website=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		{
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._controller.ggUpdateConditionTimer();
		me._zoomout.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		me._key_up.ggUpdateConditionTimer();
		me._key_down.ggUpdateConditionTimer();
		me._key_left.ggUpdateConditionTimer();
		me._key_right.ggUpdateConditionTimer();
		if (me._element_alpha_timer.ggLastIsActive!=me._element_alpha_timer.ggIsActive()) {
			me._element_alpha_timer.ggLastIsActive=me._element_alpha_timer.ggIsActive();
			if (me._element_alpha_timer.ggLastIsActive) {
			} else {
				player.setVariableValue('vis_timer', true);
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressedText) {
			}
			switch(me.skinKeyPressedKey) {
				case 37:
					player.changePanLog(0.5,true);
					break;
				case 38:
					player.changeTiltLog(0.5,true);
					break;
				case 39:
					player.changePanLog(-0.5,true);
					break;
				case 40:
					player.changeTiltLog(-0.5,true);
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = e.keyCode;
		me.skinKeyPressedText = e.key;
	});
	document.addEventListener('keyup', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = 0;
		me.skinKeyPressedText = '';
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};