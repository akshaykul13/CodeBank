var gfc_Rn=osapi,gfc_Sn="ceil";gfc_1[gfc_].share=gfc_cd(23,function(){gfc_jn();return gfc_d});gfc_3f[gfc_].ceil=gfc_cd(19,function(){gfc_ua(this,gfc_k[gfc_Sn](this[gfc_p]));gfc_Oa(this,gfc_k[gfc_Sn](this[gfc_J]));return this});gfc_1[gfc_].Fi=gfc_cd(18,function(){var a=this.wd;a.valid?(this.d=this.Bg(this.wd),this.Mh(a[gfc_Wb])):(this.wd=gfc_c,this.render(a.actions,a[gfc_Wb],a.params));this.Ag()});gfc_1[gfc_].xf=gfc_cd(14,function(){return this.Eb.pop()});
gfc_1[gfc_].ni=gfc_cd(5,function(a,b,c){return a?c<b?[]:a[gfc_ib](gfc_k.min(b,a[gfc_n]),gfc_k.min(c,a[gfc_n])):[]});
var gfc_Tn=function(a){return a=gfc_h.friendconnect_serverBase+"/friendconnect/favicon?url="+escape(a)},gfc_7=function(a,b,c){this.Ea();this.Zq();var d=new gfc_O;d.set("members",{action:this.iu,callback:this.gt});d.set("member-page",{action:this.hu,callback:this.ft});d.set("blocked-member-page",{action:this.bu,callback:this.at});d.set("profile-friends-page",{action:this.nu,callback:this.kt});d.set("sitesData",{action:this.vu,callback:this.ot});d.set("viewerFriends",{action:this.Au,callback:this.qt});
d.set("profileData",{action:this.mu,callback:this.jt});d.set("blockUser",{action:this.au,callback:this.$s});d.set("unblockUser",{action:this.yu,callback:this.pt});d.set("profileFriends",{action:this.ou,callback:this.lt});d.set("activityData",{action:this.Hf,callback:this.hd});d.set("sendFriendRequest",{action:this.uu,callback:this.nt});d.set("sendFriendRequestResponse",{action:this.eu,callback:this.Xl});d.set("deleteActivity",{action:this.If,callback:this.hd});d.set("requestAndProcessViewerNumWaitingMessages",
{action:this.Bu,callback:this.st});d.set("requestPromo",{action:this.pu,callback:this.mt});this.ib=gfc_c;this.Ww=new gfc_rn("fc-members-options-menu",gfc_L(this.Es,this),gfc_L(this.Ds,this),gfc_L(this.Fs,this),0,gfc_h.friendconnect_serverBase,this.f("ENDCAP_LINK_COLOR")||"0000cc",this.f("CONTENT_TEXT_COLOR")||"000000");this.Iv=gfc_d;this.Aa=10;this.tf=15;this.en=10;var e=gfc_7g(gfc_Rg()),f=gfc_Un;this.Wb=3;this.oc=8;this.um=gfc_c;this.pa=this.oc*this.Wb;this.slimTopCapHeight=19;this.tinyTopCapHeight=
8;this.isMessagingEnabled=a;this.isPromosEnabled=b;this.isSocialShareEnabled=c;this.numWaitingMessages=0;this.promoCode=-1;this.promoHtml=gfc_c;this.Ob=new gfc_nn;this.Gh()&&(a=(a=this.f(f.FACE_SIZE))?gfc_ga(a):32,a+=6,this.Wb=gfc_k[gfc_pb]((e[gfc_p]-10)/a),e=340,e=this.f(f.HEIGHT),b=this.f(f.NUMBER_ROWS),f=27,b?(this.oc=gfc_ga(b),e=this.oc*a,this.um=e+f):e&&(e=gfc_ga(e)-96,this.oc=gfc_k.max(2,gfc_k[gfc_pb](e/a)),this.um=this.oc*a+f),this.pa=this.oc*this.Wb);gfc_1[gfc_A](this,d)};gfc_7.inherits(gfc_1);
gfc_Ea(gfc_7[gfc_],function(){gfc_7.i[gfc_C][gfc_A](this);gfc_Wm("start");var a=gfc_e[gfc_o][gfc__b](),b=gfc_ka();(a=b.profileId||a.profileId)?(b={},b[gfc_i[gfc_u][gfc_H].ID]=a,a=new gfc_i[gfc_u](b),this.render(["profileData","profileFriends","activityData"],"profile",{person:a})):(a=["members","viewerFriends"],this.isMessagingEnabled&&a[gfc_m]("requestAndProcessViewerNumWaitingMessages"),this.isPromosEnabled&&!this.Hb()&&a[gfc_m]("requestPromo"),this.render(a,"faces"))});gfc_7[gfc_].e={};
gfc_7[gfc_].Ea=function(){this.e.MSG_SITE_MEMBERS="Members";this.e.MSG_BE_THE_FIRST="Be the first!";this.e.MSG_NO_SITE_MEMBERS="There are no members yet.";this.e.MSG_ALL_SITE_MEMBERS="All Members";this.e.MSG_ALL_BLOCKED_MEMBERS="All Blocked Members";this.e.MSG_NO_BLOCKED_MEMBERS="You have not blocked any members";this.e.MSG_YOUR_FRIENDS="Your Friends";this.e.MSG_ALL_YOUR_FRIENDS="All Your Friends";this.e.MSG_JFJ="Join and connect with others!";this.e.MSG_MANAGE="Manage members";this.e.MSG_SETTINGS=
"Settings";this.e.MSG_OPTIONS="Options";this.e.MSG_INVITE="Invite";this.e.MSG_MEMBERS_SHARE="Share this page";this.e.MSG_BACK="Back";this.e.MSG_BACK_TO_TOP="Home";this.e.MSG_VIEW_MY_PROFILE="View my profile";this.e.MSG_ABOUT_ME="About me";this.e.MSG_MORE="More \u00bb";this.e.MSG_SHOW_BLOCKED="Show blocked members \u00bb";this.e.MSG_SHOW_ALL="\u00ab Show all members";this.e.MSG_INVITE_YOUR_FRIENDS="Invite your friends";this.e.MSG_LINK_IN_NETWORKS="Link in your social networks";this.e.MSG_ACTIVITIES=
"Activities";this.e.MSG_ALL_ACTIVITIES="More activities";this.e.MSG_DELETE_THIS="Delete";this.e.MSG_SITES="Sites I've joined";this.e.MSG_ALL_SITES="More sites I've joined";this.e.MSG_LINKS="Links";this.e.MSG_ALL_LINKS="More links";this.e.MSG_NO_ACTIVITIES="No activities to show";this.e.MSG_ADD_AS_FRIEND="Add as friend";this.e.MSG_SEND_MESSAGE="Send a message";this.e.MSG_BLOCK_USER="Block this user";this.e.MSG_UNBLOCK_USER="Unblock this user";this.e.MSG_USER_IS_ADMIN="Administrator";this.e.MSG_JOIN=
"Join this site";this.e.MSG_OR="or";this.e.MSG_SIGN_IN="Sign in";this.e.MSG_SIGN_OUT="Sign out";this.e.MSG_PREVIOUS="\u00ab Previous";this.e.MSG_NEXT="Next \u00bb";this.e.MSG_NEWER="\u00ab Newer";this.e.MSG_OLDER="Older \u00bb";this.e.MSG_ACCEPT_ALL_FRIEND_REQUESTS="Accept all";this.e.MSG_HELP_FRIENDREQUEST="You and your friends will see each other across all Friend Connect sites.";this.e.MSG_HELP_FRIENDINVITE="Once you are friends, you will see each other across all Friend Connect sites.";this.e.MSG_HELP_BLOCKMEMBER=
"Blocking a visitor removes them from the members list and prevents them from interacting with other visitors on your site";this.e.MSG_INVITATION="Invitation:";this.e.MSG_SEND="Send";this.e.MSG_BLOCK="Block";this.e.MSG_IGNORE="Ignore";this.e.MSG_CANCEL="Cancel";this.e.MSG_SITE_SETTINGS="Site settings";this.e.MSG_INVITE_FRIENDS="Invite friends";this.e.MSG_ABOUT_FC="About Friend Connect";this.e.MSG_ALREADY_MEMBER="Already a member?";this.e.MSG_EDIT_PROFILE="Edit profile"};gfc_7[gfc_].ra={};
gfc_7[gfc_].Zq=function(){this.ra.MSG_SITE_MEMBERS="Followers";this.ra.MSG_NO_SITE_MEMBERS="There are no followers yet.";this.ra.MSG_SHOW_BLOCKED="Show blocked followers \u00bb";this.ra.MSG_SHOW_ALL="\u00ab Show all followers";this.ra.MSG_ALL_SITE_MEMBERS="All Followers";this.ra.MSG_ALL_BLOCKED_MEMBERS="All Blocked Followers";this.ra.MSG_NO_BLOCKED_MEMBERS="You have not blocked any followers";this.ra.MSG_LIKE_THIS_SITE="Like this blog?";this.ra.MSG_JOIN="Follow";this.ra.MSG_BACK_TO_TOP="Members";
this.ra.MSG_JFJ="Follow and connect with your friends!";this.ra.MSG_HELP_FRIENDREQUEST="You and your friends will see each other across all Following blogs and Friend Connect sites.";this.ra.MSG_HELP_FRIENDINVITE="Once you are friends, you will see each other across all Following blogs and Friend Connect sites."};
gfc_7[gfc_].K=function(a,b){var c=gfc_b;if(b[gfc_D]&&b[gfc_D].person){var d={},e=b[gfc_D].person[gfc_Rb]()+" is your friend";d.MSG_IS_FRIEND=e;e="You have invited "+(b[gfc_D].person[gfc_Rb]()+" to be your friend");d.MSG_IS_INVITED=e;e=b[gfc_D].person[gfc_Rb]()+"'s friends";d.MSG_PROFILE_FRIENDS=e;e="All "+(b[gfc_D].person[gfc_Rb]()+"'s friends");d.MSG_ALL_PROFILE_FRIENDS=e;for(var f in d)this.h(a,f,d[f])}b.invitedBy&&b.invitedBy[gfc_Rb]()&&(d=gfc_j[gfc_p]?gfc_j[gfc_p]:gfc_j[gfc_Ub][gfc_eb]+2,c=(d-
135)/8,d=(d-175)/8,c="View "+(gfc_Km(b.invitedBy[gfc_Rb](),c)+"'s profile"),d=gfc_Km(b.invitedBy[gfc_Rb](),d)+" invited you to this site",this.h(a,"MSG_VIEW_INVITER_PROFILE",c),this.h(a,"MSG_INVITED_YOU",d),this.Iv=gfc_b,c=gfc_d);d=this.numWaitingMessages+" messages waiting for you.";this.isMessagingEnabled&&0<this.numWaitingMessages&&(c=gfc_d,this.h(a,"showWaitingMessages",gfc_b),this.isMessagingEnabled&&(this.h(a,"MSG_NUM_WAITING_MESSAGES",d),this.h(a,"MSG_VIEW_AND_CONFIGURE_MESSAGING","View messages")));
b.friendRequests&&(0<b.friendRequests[gfc_ab]()&&(c=gfc_d),d=1==b.friendRequests[gfc_ab]()?"New friend request \u00bb":"New friend requests ("+(b.friendRequests[gfc_ab]()+") \u00bb"),this.h(a,"MSG_NEW_FRIEND_REQUESTS",d));if(this.ib){if(this.cl(this.ib.themeId))for(f in this.ra)this.h(a,f,this.ra[f]);this.ib.signInPrompt&&this.h(a,"MSG_JOIN",this.ib.signInPrompt);this.ib.signOutPrompt&&this.h(a,"MSG_SIGN_OUT",this.ib.signOutPrompt)}this.h(a,"isViewerAdmin",b.isViewerAdmin);this.h(a,"isMessagingEnabled",
this.isMessagingEnabled);this.h(a,"acceptMessages",this.Hn);this.h(a,"isViewingSelf",b.viewer&&b[gfc_D]&&b[gfc_D].person&&b.viewer[gfc_z]()==b[gfc_D].person[gfc_z]());d=gfc_d;if(b.owner&&(e=b.owner[gfc_I]("profileExtensions")))for(f in e)d=gfc_b;this.h(a,"communityHasProfile",d);this.h(a,"promoHtml",c?this.promoHtml:gfc_c);this.h(a,"insertHtml",function(a,b){gfc_wa(a,b)})};gfc_7[gfc_].cl=function(a){return"blogger"==a};
gfc_7[gfc_].Sg=function(a,b,c,d){gfc_hn({id:a,text:b,version:this.cl(this.ib.themeId)?1:gfc_c,style:c},d)};
gfc_7[gfc_].P=function(a){function b(b,c){d.h(a,b,gfc_L(c,d))}this.h(a,"facesPerRow",this.Wb);for(var c in this.e)this.h(a,c,this.e[c]);var d=this;b("getThumbnail",this.wc);b("map",this.map);b("elide",gfc_Km);b("safeSlice",this.ni);b("showAllActivities",this.tv);b("transformActivity",this.gc);b("nextActivities",this.ds);b("previousActivities",this.Ns);b("showAllLinks",this.vv);b("transformLink",this.gw);b("nextLinks",this.hs);b("previousLinks",this.Ps);b("showAllSites",this.yv);b("transformSite",
this.hw);b("nextSites",this.ps);b("previousSites",this.Vs);b("showAllMembers",this.wv);b("showBlockedMembers",this.Av);b("showUnblockedMembers",this.Rv);b("nextMembers",this.is);b("nextBlockedMembers",this.es);b("previousMembers",this.Qs);b("previousBlockedMembers",this.Os);b("showAllProfileFriends",this.xv);b("nextProfileFriends",this.ns);b("previousProfileFriends",this.Us);b("showAllViewerFriends",this.zv);b("nextViewerFriends",this.qs);b("previousViewerFriends",this.Ws);b("isHome",this.Dh);b("goBack",
this.ih);b("goBackToHome",this.Kv);b("invite",this.invite);b("editSettings",this.Bb);b("signout",this.signout);b("signin",this.signin);b("viewProfile",this.wn);b("blockUser",this.cj);b("unblockUser",this.kw);b("goToInviteFriend",this.hq);b("sendMessageDialog",this.Qu);b("goToBlockMember",this.gq);b("goToEditProfile",this.Bb);b("goToViewerProfile",this.iq);b("sendInvite",this.Pu);b("blockMember",this.Zn);b("acceptFriendRequest",this.Gn);b("ignoreFriendRequest",this.Yq);b("viewFriendRequests",this.sw);
b("acceptAllFriendRequests",this.Fn);b("numPreviewFriends",this.Pp);b("numPreviewMembers",this.Qp);b("showInvitedBy",this.Xp)};
gfc_7[gfc_].vk=function(a){var a=gfc_k.max(1,a?this.oc-1:this.oc),b=this.d[gfc_r].members?this.d[gfc_r].members[gfc_ab]():0,c=this.d[gfc_r].friends?this.d[gfc_r].friends[gfc_ab]():0,b=gfc_k[gfc_Sn](b/this.Wb),c=gfc_k[gfc_Sn](c/this.Wb);b>gfc_k[gfc_Sn](a/2)?c>gfc_k[gfc_pb](a/2)?(b=gfc_k[gfc_Sn](a/2),c=gfc_k[gfc_pb](a/2)):b=gfc_k.max(0,a-c):c>gfc_k[gfc_pb](a/2)&&(c=gfc_k.max(0,a-b));b*=this.Wb;c*=this.Wb;return a={numMembers:b,numFriends:c}};gfc_7[gfc_].Qp=function(a){return this.vk(a).numMembers};
gfc_7[gfc_].Pp=function(a){return this.vk(a).numFriends};gfc_7[gfc_].hu=function(a,b){var c=gfc_i[gfc_G](),d={},e=gfc_i[gfc_Vb][gfc_Ac];d[e.FILTER]="PUBLICLY_VISIBLE";d[e.FIRST]=b[gfc_C];d[e.MAX]=b.pageSize?b.pageSize:this.pa;var f=[gfc_i[gfc_u][gfc_H].ID,gfc_i[gfc_u][gfc_H][gfc_3a],gfc_i[gfc_u][gfc_H][gfc_Xc]];d[e[gfc_Dc]]=f;d[gfc_i[gfc_Vb].DataRequestFields.ESCAPE_TYPE]=gfc_i.EscapeType.NONE;c.add(c[gfc_$b](gfc_ae(),d),"ownerFriends");c[gfc_B](a)};
gfc_7[gfc_].ft=function(a){this.d[gfc_r].members=a.get("ownerFriends")[gfc_s]()};gfc_7[gfc_].bu=function(a,b){var c=gfc_i[gfc_G](),d={},e=gfc_i[gfc_Vb][gfc_Ac];d[e.FIRST]=b[gfc_C];d[e.MAX]=b.pageSize?b.pageSize:this.pa;d[gfc_i[gfc_Vb].DataRequestFields.ESCAPE_TYPE]=gfc_i.EscapeType.NONE;e={};e[gfc_i[gfc_Xa][gfc_H][gfc_Qb]]=gfc_i[gfc_Xa].PersonId.OWNER;e[gfc_i[gfc_Xa][gfc_H][gfc_rb]]="BLOCKED";e[gfc_i[gfc_Xa][gfc_H][gfc_1a]]=1;e=gfc_i[gfc_5c](e);c.add(c[gfc_$b](e,d),"blockedMembers");c[gfc_B](a)};
gfc_7[gfc_].at=function(a){this.d[gfc_r].blockedMembers=a.get("blockedMembers")[gfc_s]()};gfc_7[gfc_].nu=function(a,b){var c=gfc_i[gfc_G](),d=b&&b.person&&b.person[gfc_z]()||this.w[gfc_D].person[gfc_z](),e={},f=gfc_i[gfc_Vb][gfc_Ac];e[f.FIRST]=b[gfc_C];e[f.MAX]=b.pageSize?b.pageSize:this.pa;d=this.Fl(d);e[gfc_i[gfc_Vb].DataRequestFields.ESCAPE_TYPE]=gfc_i.EscapeType.NONE;c.add(c[gfc_$b](d,e),"profileFriends");c[gfc_B](a)};
gfc_7[gfc_].Fl=function(a){var b={};b[gfc_i[gfc_Xa][gfc_H][gfc_Qb]]=a;b[gfc_i[gfc_Xa][gfc_H][gfc_rb]]="FRIENDS";b[gfc_i[gfc_Xa][gfc_H][gfc_1a]]=1;return gfc_i[gfc_5c](b)};gfc_7[gfc_].kt=function(a){this.d[gfc_r][gfc_D].friends=a.get("profileFriends")[gfc_s]()};gfc_7[gfc_].Wi=function(a){for(var b=gfc_i[gfc_r].getDataContext(),c=0;c<a[gfc_n];c++){var d=a[c],d=b.getDataSet(d);if(!d||d.code)return gfc_d}return gfc_b};
gfc_7[gfc_].iu=function(a){var b=this.pa,c=!b||24==b;c&&gfc_i[gfc_r]&&this.Wi(["ownerFriends","viewer","siteSettings","friendRequests"])?a(gfc_i[gfc_r].getDataContext()[gfc_s]()):(c=gfc_Rn.newBatch(),b={userId:"@owner",groupId:"@friends",count:b,filterBy:"PUBLICLY_VISIBLE"},c.add("ownerFriends",gfc_Rn.people.get(b)),c.add("viewer",gfc_Rn.people.getViewer()),c.add("siteSettings",gfc_Rn.extensions.get({command:"GetSiteSettings"})),c.add("friendRequests",gfc_Rn.extensions.get({command:"GetFriendRequests",
params:'{"idSpec" : "VIEWER"}'})),(b=gfc_ka().psinvite)&&c.add("invitedBy",gfc_Rn.extensions.get({command:"DecodeInvitation",params:{token:b}})),c.execute(a))};gfc_7[gfc_].gt=function(a,b){this.d[gfc_r].members=gfc_3d(a.ownerFriends,gfc_Zd);this.d[gfc_r].viewer=gfc_Zd(a.viewer);this.Xl(a,b,gfc_b);this.ib=a[gfc_Ec];var c=gfc_ka();if(c.psinvite&&(this.d[gfc_r].viewer==gfc_c||""==this.d[gfc_r].viewer))a.invitedBy&&(a.invitedBy.nickname=a.invitedBy.displayName),this.d[gfc_r].invitedBy=new gfc_i[gfc_u](a.invitedBy)};
gfc_7[gfc_].Au=function(a,b){var b=b||{},c=b.pageSize||this.maxFacesPerPage,d=!b[gfc_C]||0==b[gfc_C],e=!c||20==c;d&&(e&&gfc_i[gfc_r])&&this.Wi(["friends","isViewerAdmin"])?a(gfc_i[gfc_r].getDataContext()[gfc_s]()):(d=gfc_Rn.newBatch(),c={userId:"@viewer",groupId:"@friends",count:c},b[gfc_C]&&(c.startIndex=b[gfc_C]),d.add("friends",gfc_Rn.people.get(c)),d.add("isViewerAdmin",gfc_Rn.people.get({userId:"@viewer",groupId:"ADMINS"})),d.execute(a))};
gfc_7[gfc_].qt=function(a){var b=a.friends;b&&!b.error&&(this.d[gfc_r].friends=gfc_3d(b,gfc_Zd));this.ym(a)};gfc_7[gfc_].Bu=function(a){var b=gfc_i[gfc_G]();b.add(gfc_1d("VIEWER"),"numWaitingMessages");b[gfc_B](a)};gfc_7[gfc_].st=function(a){this.numWaitingMessages=a.get("numWaitingMessages")[gfc_s]().numberOfWaitingMessages};
gfc_7[gfc_].pu=function(a){this.log("requesting promo");var b=new gfc_e[gfc_Jb],b=b.getLang()+(b[gfc_uc]()?"_"+b[gfc_uc]():""),c=gfc_i[gfc_G]();c.add(gfc_Rd("GetPromo",{hl:b}),"promo");c[gfc_B](a)};gfc_7[gfc_].mt=function(a){this.log("processing promo");if((a=a.get("promo")[gfc_s]())&&-1!=a.promoCode)this.promoCode=a.promoCode,this.promoHtml=a.promoHtml};
gfc_7[gfc_].On=function(){for(var a=function(){this.promoHtml=gfc_c;for(var a=gfc_dg("div","fc-promo-main",gfc_R("peg")),b=0;b<a[gfc_n];b++)gfc_$g(a[b],gfc_d);this.X();this.log("Dismissing promo "+this.promoCode);a=gfc_i[gfc_G]();a.add(gfc_Rd("DismissPromo",{promoCode:this.promoCode}));a[gfc_B](gfc_L(function(){this.log("The promo has been dismissed");this.promoCode=-1},this))},b=gfc_dg("a","fc-promo-dismiss-link",gfc_R("peg")),c=0;c<b[gfc_n];c++){var d=b[c],e="click";gfc_4h(d,e);gfc_Xh(d,e,gfc_L(a,
this))}};gfc_7[gfc_].ym=function(a){var b=a.isViewerAdmin;if(b&&!b.error)this.d[gfc_r].isViewerAdmin=b.list[gfc_n];else if(a.get&&a.get("isViewerAdmin")&&(a=a.get("isViewerAdmin"))&&!a[gfc_Fb]())this.d[gfc_r].isViewerAdmin=a[gfc_s]()[gfc_ab]()};gfc_7[gfc_].Fn=function(a){var b=[];a.each(function(a){a={user:a[gfc_I](goog.opensocial.peoplesense.Invite[gfc_H].INVITER)[gfc_z](),action:"ACCEPT"};b[gfc_m](a)});this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_L(this.yg,this),{friendRequestResponses:b})};
gfc_7[gfc_].Kv=function(){this.fa();this.render(["members","viewerFriends"],"faces")};gfc_7[gfc_].Gn=function(a){a={user:a[gfc_z](),action:"ACCEPT"};this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_L(this.yg,this),{friendRequestResponses:[a]})};gfc_7[gfc_].sw=function(){this.fa();this.B("friend-requests")};gfc_7[gfc_].wn=function(a){this.Hb()?(this.fa(),this.uw(a)):gfc_Od(a[gfc_z]())};
gfc_7[gfc_].uw=function(a){this.render(["profileData","profileFriends","activityData"],"profile",{person:a})};gfc_7[gfc_].vu=function(a,b){var c=gfc_i[gfc_G](),d=gfc_i[gfc_Vb][gfc_Ac],e={};e[d.FIRST]=b&&b[gfc_C]?b[gfc_C]:0;var f=this.d[gfc_r][gfc_D].person[gfc_z]();e[d.MAX]=this.en;c.add(gfc_8d(gfc_i[gfc_5c]({userId:f}),e),"profileSites");c[gfc_B](a)};gfc_7[gfc_].ot=function(a){this.d[gfc_r][gfc_D].sites=a.get("profileSites")[gfc_s]()};
gfc_7[gfc_].mu=function(a,b){this.d[gfc_r].profile={};var b=b||{},c=b.person,d={},c=c[gfc_z](),e=gfc_i[gfc_G](),f=[gfc_i[gfc_u][gfc_H].ID,gfc_i[gfc_u][gfc_H][gfc_3a],gfc_i[gfc_u][gfc_H][gfc_Xc],gfc_i[gfc_u][gfc_H].ABOUT_ME,gfc_i[gfc_u][gfc_H].URLS,"profileExtensions"],g=gfc_i[gfc_Vb][gfc_Ac];d[g[gfc_Dc]]=f;d[gfc_i[gfc_Vb].DataRequestFields.ESCAPE_TYPE]=gfc_i.EscapeType.NONE;e.add(e.newFetchPersonRequest(c,d),"profile");e.add(e.newFetchPersonRequest("VIEWER",d),"viewer");e.add(gfc_6d("VIEWER","ADMINS"),
"isViewerAdmin");e.add(e.newFetchPersonRequest("OWNER",d),"owner");this.ib||e.add(gfc_0d(),"siteSettings");e.add(gfc_6d(c,"ADMINS"),"isAdmin");e.add(gfc_6d(c,"BLOCKED"),"isBlocked");this.isMessagingEnabled&&e.add(gfc_1d(c),"canMessage");e[gfc_B](a)};
gfc_7[gfc_].Hf=function(a,b){var c=b.person[gfc_z](),d=gfc_i[gfc_5c]({userId:c}),e=gfc_i[gfc_G]();(this.d[gfc_r].viewer&&c!=this.d[gfc_r].viewer[gfc_z]()||this.Hb())&&e.add(gfc_5d(b.person[gfc_z](),"VIEWER"),"isProfileFriend");e.add(e[gfc_Bb](d,{}),"activities");e[gfc_B](a)};
gfc_7[gfc_].hd=function(a,b){a.get("activities")[gfc_s]()!=gfc_c&&(this.d[gfc_r][gfc_D].activities=a.get("activities")[gfc_s]());var c=a.get("isProfileFriend");c&&(b&&this.d[gfc_r].viewer!=gfc_c&&this.d[gfc_r].viewer[gfc_z]()!=b.person[gfc_z]())&&(this.d[gfc_r][gfc_D].isFriend=c[gfc_s]()[gfc_t])};
gfc_7[gfc_].jt=function(a,b){var c=a.get("profile")[gfc_s]();this.d[gfc_r][gfc_D].person=c;this.d[gfc_r][gfc_D].person.externalProfileUrl=gfc_c;var d=c[gfc_I](gfc_i[gfc_u][gfc_H].URLS),e=[];if(d)for(var f=0;f<d[gfc_n];f++){var g=d[f];"profile"!=g[gfc_I](gfc_i.Url[gfc_H].TYPE)&&"externalProfile"!=g[gfc_I](gfc_i.Url[gfc_H].TYPE)&&e[gfc_m](g);"externalProfile"==g[gfc_I](gfc_i.Url[gfc_H].TYPE)&&(this.d[gfc_r][gfc_D].person.externalProfileUrl=g[gfc_I](gfc_i.Url[gfc_H].ADDRESS))}this.d[gfc_r][gfc_D].links=
new gfc_Vn(e,this.tf,0);this.d[gfc_r].owner=a.get("owner")[gfc_s]();this.d[gfc_r].viewer=a.get("viewer")[gfc_s]();if((d=this.d[gfc_r].viewer)&&b.person[gfc_z]()!=this.d[gfc_r].viewer[gfc_z]())this.d[gfc_r][gfc_D].isAdmin=a.get("isAdmin")[gfc_s](),this.d[gfc_r][gfc_D].isAdmin&&(this.d[gfc_r][gfc_D].isAdmin=this.d[gfc_r][gfc_D].isAdmin[gfc_ab]()),this.d[gfc_r][gfc_D].isBlocked=a.get("isBlocked")[gfc_s](),this.d[gfc_r][gfc_D].isBlocked&&(this.d[gfc_r][gfc_D].isBlocked=this.d[gfc_r][gfc_D].isBlocked[gfc_ab]());
c=c[gfc_I]("profileExtensions");c=this.Ob.lf(c,this.Ob.xi);d=[];for(f in c){e=c[f];g={};g.title=e.title;var h=gfc_d;if("SHORT_TEXT"==e.entryType||"LONG_TEXT"==e.entryType)e[gfc_t]&&e[gfc_t][gfc_db]&&(g.body=[],g[gfc_Ub][gfc_m](e[gfc_t][gfc_db]),h=gfc_b);else if(e[gfc_t]&&e[gfc_t].choice&&0<e[gfc_t].choice[gfc_n]){g.body=[];for(h=0;h<e[gfc_t].choice[gfc_n];++h)g[gfc_Ub][gfc_m](e[gfc_t].choice[h][gfc_Tc]);h=gfc_b}h&&d[gfc_m](g)}this.d[gfc_r][gfc_D].profileExtensions=d;this.ib||(this.ib=a.get("siteSettings")[gfc_s]());
this.isMessagingEnabled&&(f=(f=a.get("canMessage"))&&f[gfc_s]().canSendMessage,this.d[gfc_r][gfc_D].canSendMessage=f);this.ym(a)};gfc_7[gfc_].cj=function(a){this.render(["blockUser"],"profile",{person:a})};gfc_7[gfc_].kw=function(a){this.render(["unblockUser"],"profile",{person:a})};gfc_7[gfc_].map=function(a,b){var c=[],d=gfc_L(function(a,b,c){a[gfc_m](b(c))},this,c,b);a.each(d);return c};gfc_7[gfc_].wv=function(){this.fa();this.B("members-page")};
gfc_7[gfc_].Av=function(){this.fa();this.render(["blocked-member-page"],"blocked-members-page",{start:0})};gfc_7[gfc_].Rv=function(){this.Fi()};gfc_7[gfc_].is=function(a){this.render(["member-page"],"members-page",{start:this.pa+a.getOffset()})};gfc_7[gfc_].Qs=function(a){this.render(["member-page"],"members-page",{start:a.getOffset()-this.pa})};gfc_7[gfc_].es=function(a){this.render(["blocked-member-page"],"blocked-members-page",{start:this.pa+a.getOffset()})};
gfc_7[gfc_].Os=function(a){this.render(["blocked-member-page"],"blocked-members-page",{start:a.getOffset()-this.pa})};gfc_7[gfc_].zv=function(){this.fa();this.B("viewer-friends-page")};gfc_7[gfc_].qs=function(a){this.render(["viewerFriends"],"viewer-friends-page",{start:this.pa+a.getOffset()})};gfc_7[gfc_].Ws=function(a){this.render(["viewerFriends"],"viewer-friends-page",{start:a.getOffset()-this.pa})};gfc_7[gfc_].xv=function(){this.fa();this.B("profile-friends-page")};
gfc_7[gfc_].ns=function(a){this.render(["profile-friends-page"],"profile-friends-page",{start:this.pa+a.getOffset(),person:this.d[gfc_r][gfc_D].person})};gfc_7[gfc_].Us=function(a){this.render(["profile-friends-page"],"profile-friends-page",{start:a.getOffset()-this.pa,person:this.d[gfc_r][gfc_D].person})};gfc_7[gfc_].vv=function(){this.fa();this.B("links")};gfc_7[gfc_].hs=function(a){var b=this.tf+a.getOffset();this.d[gfc_r][gfc_D].links=new gfc_Vn(a.all(),this.tf,b);this.B("links")};
gfc_7[gfc_].Ps=function(a){var b=a.getOffset()-this.tf;this.d[gfc_r][gfc_D].links=new gfc_Vn(a.all(),this.tf,b);this.B("links")};gfc_7[gfc_].yv=function(){this.fa();this.B("sites")};gfc_7[gfc_].ps=function(a){this.render(["sitesData"],"sites",{start:this.en+a.getOffset()})};gfc_7[gfc_].Vs=function(a){this.render(["sitesData"],"sites",{start:a.getOffset()-this.en})};gfc_7[gfc_].tv=function(){this.fa();this.B("activities")};
gfc_7[gfc_].ds=function(a){this.render(["activityData"],"activities",{start:this.Aa+a.getOffset()})};gfc_7[gfc_].Ns=function(a){this.render(["activityData"],"activities",{start:a.getOffset()-this.Aa})};gfc_7[gfc_].$e=function(a){this.render(["deleteActivity"],this.d[gfc_Wb],{activity:a})};gfc_7[gfc_].au=function(a,b){var c=gfc_i[gfc_G]();c.add(gfc_7d(b.person[gfc_z](),["BLOCKED"],[]),"block");this.bd();c[gfc_B](a)};
gfc_7[gfc_].$s=function(a){if(a=!a.get("block")[gfc_Fb]())this.d[gfc_r][gfc_D].isBlocked=gfc_b};gfc_7[gfc_].yu=function(a,b){var c=gfc_i[gfc_G]();c.add(gfc_7d(b.person[gfc_z](),[],["BLOCKED"]),"unblock");this.bd();c[gfc_B](a)};gfc_7[gfc_].pt=function(a){if(a=!a.get("unblock")[gfc_Fb]())this.d[gfc_r][gfc_D].isBlocked=gfc_d};
gfc_7[gfc_].If=function(a,b){var c=b.activity,d=c[gfc_I](gfc_i[gfc_cc][gfc_H].ID),c=gfc_i[gfc_5c]({userId:c[gfc_I](gfc_i[gfc_cc][gfc_H][gfc_Qb])}),e=gfc_i[gfc_G]();e.add(gfc_Sd(d),"delete");e.add(e[gfc_Bb](c,{}),"activities");e[gfc_B](a)};
gfc_7[gfc_].gc=function(a){var b=gfc_qn,c=function(a){return a=a[gfc_q](/<a/g,"<a target='_top'")},d=gfc_c,e=this.d[gfc_r].viewer;e!=gfc_c&&a[gfc_I](gfc_i[gfc_cc][gfc_H][gfc_Qb])==this.d[gfc_r].viewer[gfc_z]()&&(d=gfc_L(this.$e,this,a));(e=a[gfc_I](gfc_i[gfc_cc][gfc_H].STREAM_FAVICON_URL,{escapeType:"none"}))||(e=gfc_h.friendconnect_imageUrl+"/favicons.gif");return{icon:e,time:b(gfc_ga(a[gfc_I](gfc_i[gfc_cc][gfc_H].POSTED_TIME))),link:a[gfc_I](gfc_i[gfc_cc][gfc_H].STREAM_URL,{escapeType:"none"}),
siteTitle:a[gfc_I](gfc_i[gfc_cc][gfc_H].STREAM_TITLE,{escapeType:"none"}),innerHTML:c(a[gfc_I](gfc_i[gfc_cc][gfc_H].TITLE,{escapeType:"none"})),body:c(a[gfc_I](gfc_i[gfc_cc][gfc_H].BODY,{escapeType:"none"})),deleteHandler:d}};gfc_7[gfc_].hw=function(a){var b=gfc_e[gfc_yc].unescapeString,c=gfc_Tn;return{icon:c(a[gfc_I](gfc_i[gfc_u][gfc_H][gfc_kc])),link:a[gfc_I](gfc_i[gfc_u][gfc_H][gfc_kc]),title:b(a[gfc_Rb]())}};
gfc_7[gfc_].gw=function(a){var b=gfc_e[gfc_yc].unescapeString,c=gfc_Tn,d=a[gfc_I](gfc_i.Url[gfc_H].ADDRESS);return{icon:c(d),link:d,title:b(a[gfc_I](gfc_i.Url[gfc_H].LINK_TEXT))||d}};gfc_7[gfc_].ou=function(a,b){var c=gfc_i[gfc_G](),d=b.person[gfc_z](),e=gfc_i[gfc_Vb][gfc_Ac],f=this.Fl(d),g={};g[gfc_i[gfc_Vb].DataRequestFields.ESCAPE_TYPE]=gfc_i.EscapeType.NONE;c.add(c[gfc_$b](f,g),"friends");f={};f[e.FIRST]=this.Cx;f[e.MAX]=this.Bx;c.add(gfc_8d(gfc_i[gfc_5c]({userId:d}),f),"profileSites");c[gfc_B](a)};
gfc_7[gfc_].Yq=function(a){a={user:a[gfc_z](),action:"DENY"};this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_L(this.yg,this),{friendRequestResponses:[a]})};gfc_7[gfc_].yg=function(a){return a&&a["next-view"]?a["next-view"]:["friend-requests"]};gfc_7[gfc_].uu=function(a,b){var c=b[gfc_D],d=gfc_i[gfc_G]();d.add(gfc_Td(c[gfc_z](),b[gfc_Ob]),"friendRequest");this.bd();d[gfc_B](a)};gfc_7[gfc_].nt=function(a){a.get("friendRequest")[gfc_Fb]()||(this.d[gfc_r][gfc_D].isInvited=gfc_b)};
gfc_7[gfc_].eu=function(a,b){var c=gfc_Rn.newBatch(),d=b.friendRequestResponses;c.add("updateFriendRequest",gfc_Rn.extensions.get({command:"ProcessFriendRequests",params:'{"requests":'+gfc_e[gfc_hc].stringify(d)+"}"}));c.add("friendRequests",gfc_Rn.extensions.get({command:"GetFriendRequests",params:'{"idSpec" : "VIEWER"}'}));this.bd();c.execute(a)};gfc_7[gfc_].hq=function(){this.fa();this.B("invite-friend")};gfc_7[gfc_].Qu=function(a){this.isMessagingEnabled&&(a=a[gfc_I](gfc_i[gfc_u][gfc_H].ID),this.Ru(a))};
gfc_7[gfc_].Ru=function(a){if(this.isMessagingEnabled){var a="/friendconnect/messaging/compose?recipientId="+a,b=570,c=395;gfc_$m(a,gfc_g(b),gfc_g(c))}};gfc_1[gfc_].Hn=function(){var a="/friendconnect/messaging/accept",b=570,c=375;gfc_$m(a,gfc_g(b),gfc_g(c));return gfc_d};gfc_7[gfc_].gq=function(){this.fa();this.B("block-member")};gfc_7[gfc_].iq=function(){this.wn(this.d[gfc_r].viewer)};
gfc_7[gfc_].Pu=function(a){this.xf();var a={profile:a},b=gfc_R("inviteMessage");b&&(a.message=gfc_Uf(b));this.render(["sendFriendRequest"],"profile",a)};gfc_7[gfc_].Zn=function(a){this.xf();this.cj(a)};gfc_7[gfc_].Xl=function(a,b,c){c=c||gfc_d;this.d[gfc_r].friendRequests=gfc_3d(a.friendRequests,gfc_Vd);b["next-view"]=0<this.d[gfc_r].friendRequests[gfc_ab]()?"friend-requests":"faces";c||gfc_Wm("friend")};
gfc_7[gfc_].lt=function(a){this.d[gfc_r][gfc_D].sites=a.get("profileSites")[gfc_s]();this.d[gfc_r][gfc_D].friends=a.get("friends")[gfc_s]()};gfc_7[gfc_].Xp=function(){return this.Iv};gfc_7[gfc_].X=function(){this.Ww.rebuild();this.On();gfc_e[gfc_Za].adjustHeight()};gfc_7[gfc_].Es=function(a){return a=gfc_S("span",{"class":"fc-cap-link-big"},gfc_S("a",{"class":"fc-cap-link-big"},this.e.MSG_OPTIONS),a.Cg())};
gfc_7[gfc_].Ds=function(){var a=[];a[a[gfc_n]]=gfc_S("div",{"class":"goog-menuitem menuaction-settings"},this.e.MSG_SITE_SETTINGS);a[a[gfc_n]]=this.isSocialShareEnabled?gfc_S("div",{"class":"goog-menuitem menuaction-share"},this.e.MSG_MEMBERS_SHARE):gfc_S("div",{"class":"goog-menuitem menuaction-invite"},this.e.MSG_INVITE_FRIENDS);this.d[gfc_r].isViewerAdmin&&!this.Hb()&&(a[a[gfc_n]]=gfc_S("div",{"class":"goog-menuitem menuaction-manage"},this.e.MSG_MANAGE));a[a[gfc_n]]=gfc_S("div",{"class":"goog-menuitem menuaction-signout"},
this.ib.signOutPrompt||this.e.MSG_SIGN_OUT);a[a[gfc_n]]=gfc_S("div",{"class":"goog-menuseparator fc-menuseparator-line"});a[a[gfc_n]]=gfc_S("div",{"class":"goog-menuitem menuaction-aboutfc"},gfc_S("span",{"class":"fc-small-menu-link"},this.e.MSG_ABOUT_FC));return a};
gfc_7[gfc_].Fs=function(a){a[gfc_zb]();a=a[gfc_Yb].g()[gfc_9a];a[gfc_4b]("menuaction-settings")?this.Bb():a[gfc_4b]("menuaction-invite")?this.invite():a[gfc_4b]("menuaction-share")?this.share():a[gfc_4b]("menuaction-signout")?this.signout():a[gfc_4b]("menuaction-manage")?this.mq():a[gfc_4b]("menuaction-aboutfc")&&(a=gfc_h[gfc_4a](gfc_2m()+"/friendconnect"),a[gfc_ec]())};gfc_7[gfc_].mq=function(){var a={},b=gfc_e[gfc_o][gfc_qb]().canvas;gfc_Wm("lightbox");gfc_e[gfc_o].requestNavigateTo(b,a);return gfc_d};
var gfc_Un=function(a){for(var b={},c=0;c<a[gfc_n];++c)b[a[c]]=a[c];return b}("HEIGHT BORDER_COLOR CONTENT_BG_COLOR CONTENT_HEADLINE_COLOR CONTENT_LINK_COLOR CONTENT_SECONDARY_TEXT_COLOR CONTENT_SECONDARY_LINK_COLOR CONTENT_TEXT_COLOR ENDCAP_BG_COLOR ENDCAP_LINK_COLOR ENDCAP_TEXT_COLOR FACE_SIZE NUMBER_ROWS".split(" "));
gfc_7[gfc_].s=function(){var a=gfc_Un,b=[],c=0;this.f(a.HEIGHT);this.Gh()&&(b[c++]=this.j(".fc-thumbnail img {height:%spx;width:%spx}",this.f(a.FACE_SIZE)));b[c++]=this.j(".fc-scroll-botnav, .fc-scroll, .fc-noscroll-botnav {height: %spx;}\n",this.um);b[c++]=this.j(".fc-members,.fc-members-canvas {border-color: %s;}\n.fc-userpage-itemlist,.fc-userpage-itemlist-canvas,.fc-botcap-short { border-top-color: %s; }\n.fc-topcap,.fc-topverb,.fc-friendreq,.fc-friendreqs,.fc-timeframe { border-bottom-color: %s; }\n",
this.f(a.BORDER_COLOR));this.jf()&&(this.Rk("profile")?b[c++]=".fc-topcap {height: "+this.slimTopCapHeight+"px;}\n":this.Jh()?b[c++]=".fc-topcap {height: 0px;}\n":b[c++]=".fc-topcap {height: "+this.tinyTopCapHeight+"px;}\n");this.Hb()?b[c++]=".fc-userpic-caption {margin-left: 59px;}\n":b[c++]=".fc-userpic-caption {margin-left: 40px;}\n";this.Jh()?b[c++]=".fc-topcap-color {background-color: white;}\n":b[c++]=this.j(".fc-topcap-color {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));this.dl()?b[c++]=
".fc-botcap-short {background-color: white;}\n":b[c++]=this.j(".fc-botcap-short {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-botverb, .fc-topverb, .fc-members-header {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-botverb, .fc-topverb, .fc-members-header {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-topcap, .fc-botverb, .fc-topverb, .fc-botcap-short, .fc-header-sectitle, .fc-members-header {color: %s;}\n",this.f(a.ENDCAP_TEXT_COLOR));
b[c++]=this.j(".fc-botverb,.fc-topcap .fc-menutriangle-down, .fc-topcap .fc-menutriangle-up,.fc-topcap a, .fc-topcap a:active, .fc-topcap a:visited,.fc-topcap-link a, .fc-topcap-link a:active, .fc-topcap-link a:visited,.fc-cap-link-big a, .fc-cap-link-big a:active,.fc-left-verb a, .fc-left-verb a:active, .fc-left-verb a:visited,.fc-right-verb a, .fc-right-verb a:active, .fc-right-verb a:visited,.fc-subtle-botcap a, .fc-subtle-botcap a:active, .fc-subtle-botcap a:visited.fc-left-verb-canvas a, .fc-left-verb-canvas a:active, .fc-left-verb-canvas a:visited,.fc-right-verb-canvas a, .fc-right-verb-canvas a:active, .fc-right-verb-canvas a:visited {color: %s;}\n",
this.f(a.ENDCAP_LINK_COLOR));b[c++]=this.j(".fc-content-bg, .fc-subtle-botcap {background-color:%s;}\n",this.f(a.CONTENT_BG_COLOR));b[c++]=this.j(".fc-content a, .fc-content a:active, .fc-content a:visited,\n.fc-item-body a, .fc-item-body a:active, .fc-item-body a:visited,\n.fc-see-all a, .fc-see-all a:active, .fc-see-all a:visited,\n.fc-content-link a, .fc-content-link a:active, .fc-content-link a:visited,\n.fc-content-canvas a, .fc-content-canvas a:active, .fc-content-canvas a:visited {color: %s;}\n",
this.f(a.CONTENT_LINK_COLOR));b[c++]=this.j(".fc-members,.fc-members-canvas {color:%s;}\n",this.f(a.CONTENT_TEXT_COLOR));b[c++]=this.j(".fc-helpful,.fc-on-other-site,.fc-no-elements, .ot-activity-metadata {color:%s;}\n",this.f(a.CONTENT_SECONDARY_TEXT_COLOR));b[c++]=this.j(".fc-faded-link a, .fc-faded-link a:active, .fc-faded-link a:visited, .fc-faded-link-small a, .fc-faded-link-small a:active, .fc-faded-link-small a:visited {color: %s;}\n",this.f(a.CONTENT_SECONDARY_LINK_COLOR));b[c++]=this.j(".fc-sectitle {color: %s;}\n",
this.f(a.CONTENT_HEADLINE_COLOR));return gfc_7.i.s[gfc_A](this)+b[gfc_K]("\n")};gfc_M("goog.peoplesense.gadget.Members",gfc_7);gfc_M("goog.peoplesense.gadget.Members.start",gfc_7[gfc_C]);var gfc_Vn=function(a,b,c){gfc_i.Collection[gfc_A](this,a[gfc_ib](c,c+b),c,a[gfc_n]);this.Aw=a;this.ea=b};gfc_Vn.inherits(gfc_i.Collection);gfc_Vn[gfc_].all=function(){return this.Aw};gfc_Vn[gfc_].nb=function(){return this.ea};gfc_M("goog.peoplesense.gadget.Members.PagedCollection.prototype.all",gfc_Vn[gfc_].all);
gfc_M("goog.peoplesense.gadget.Members.PagedCollection.prototype.getPageSize",gfc_Vn[gfc_].nb);