/*1360191636,173213979*/

if (self.CavalryLogger) { CavalryLogger.start_js(["8n4x9"]); }

__d("legacy:link-controller",["LinkController"],function(a,b,c,d){a.LinkController=b('LinkController');},3);
__d("legacy:startsWith",["startsWith"],function(a,b,c,d){a.startsWith=b('startsWith');},3);
if(!window.CommentAdminPanelController){window.CommentAdminPanelController=function(a){copyProperties(this,{locale:a.locale,channel:a.channel,controllerID:a.controllerID,commentIDs:a.commentIDs,domIDs:a.domIDs,duplicateComments:[],fetchMoreCommentsIsPending:{},blacklistedActors:a.blacklistedActors,actorToCommentInfoMap:a.actorToCommentIDMap,commentInfoMap:a.commentInfoMap,inAggregatedView:a.inAggregatedView,inModerationQueue:a.inModerationQueue,inContextualDialog:a.inContextualDialog,isTopLevelCommentPollingEnabled:false,loggedIn:a.loggedIn,newestCommentTimestamp:a.newestCommentTimestamp,realTimePollingParams:{},userOwnsPages:a.userOwnsPages,recentlyBlacklistedActors:a.blacklistedActors});Arbiter.subscribe(ChannelConstants.getArbiterType('comments_plugin_new_post'),function(b,c){if(c.obj.target===this.realTimePollingParams.target){if(ge(c.obj.comment_element_id))return;var d=copyProperties({},this.realTimePollingParams);d.post_fbid=c.obj.post_fbid;var e=c.obj.parent_comment_id;if(e){var f=ge(e);if(!f)return;var g=DOM.scry(f,'.fbFeedbackPager.uiMorePager');if(g.length>0)return;d.parent_comment_id=e;d.is_reply_thread=true;}else{if(!this.isTopLevelCommentPollingEnabled)return;d.is_reply_thread=false;}this.pollForComments(d);}}.bind(this));this.controlledRegion=$(this.controllerID);this.attachClickHandlers();if(this.inModerationQueue)this.registerModeratorQueueHandlers(true);if(this.inContextualDialog)this.attachContextualDialogHandlers();if(!this.inAggregatedView)UnverifiedXD.init({autoResize:true,channelUrl:a.channel,hideOverflow:true,resizeWidth:false});};copyProperties(CommentAdminPanelController,{allControllers:{},mainController:null,contextualControllers:{},initController:function(a){var b=new CommentAdminPanelController(a),c=a.controllerID;CommentAdminPanelController.allControllers[c]=b;if(b.inContextualDialog){CommentAdminPanelController.contextualControllers[c]=b;}else CommentAdminPanelController.mainController=b;},syncController:function(a,b){var c=CommentAdminPanelController.allControllers[a];c.attachClickHandlers();if(!c.isControllingModerationQueue())return;c.deselectComments(b);c.registerModeratorQueueHandlers(false);c.synchronizeModeratorQueueUI();},resetController:function(a){var b=CommentAdminPanelController.allControllers[a];b.resetController();},appendComments:function(a,b,c){var d=CommentAdminPanelController.allControllers[a];d.appendComments(b,c);},prependComments:function(a,b,c){var d=CommentAdminPanelController.allControllers[a];d.prependComments(b,c);},updateController:function(a,b,c,d,e,f,g){var h=CommentAdminPanelController.allControllers[a];h.updateController(b,c,d,e,f,g);if(!CommentAdminPanelController.mainController.loggedIn)MultiLoginPopup.reattachLoginInterceptors();if(!h.isControllingModerationQueue())return;h.registerModeratorQueueHandlers(false);h.synchronizeModeratorQueueUI();},updatePollingParamsCommentas:function(a,b){var c=CommentAdminPanelController.allControllers[a];c.updatePollingParamsCommentas(b);},registerMoreCommentsLinkHandler:function(a,b){var c=CommentAdminPanelController.allControllers[a];c.registerMoreCommentsLinkHandler(b);},setRealTimePollingParams:function(a,b){var c=CommentAdminPanelController.allControllers[a];c.setRealTimePollingParams(b);},enableTopLevelCommentPolling:function(a){var b=CommentAdminPanelController.allControllers[a];b.enableTopLevelCommentPolling();},disableTopLevelCommentPolling:function(a){var b=CommentAdminPanelController.allControllers[a];b.disableTopLevelCommentPolling();},replaceContentMaybe:function(a,b){var c=DOM.scry(document.documentElement,a)[0];if(c)DOM.replace(c,b);},notifyCommentCreated:function(a){if(!CommentAdminPanelController.mainController.channel)return;UnverifiedXD.send({type:'commentCreated',href:a.href,parentCommentID:a.parentCommentID,commentID:a.commentID});},notifyCommentRemoved:function(a){if(!CommentAdminPanelController.mainController.channel)return;UnverifiedXD.send({type:'commentRemoved',href:a.href,commentID:a.commentID});},markAsShowingAllReplies:function(a){var b=a+' a.fbUpDownVoteOption',c=DOM.scry(document.documentElement,b),d=a+' li.fbUpDownVoteOption a.itemAnchor',e=DOM.scry(document.documentElement,d),f=c.concat(e);for(var g=0;g<f.length;g++){var h=f[g],i=new URI(h.getAttribute('ajaxify'));i.addQueryData({show_all_replies:1});h.setAttribute('ajaxify',i.toString());}},setLoggedIn:function(a){CommentAdminPanelController.mainController.loggedIn=a;}});copyProperties(CommentAdminPanelController.prototype,{isControllingModerationQueue:function(){var a=this==CommentAdminPanelController.mainController&&this.inModerationQueue;return a;},resetController:function(){this.commentIDs=[];this.domIDs=[];},updateController:function(a,b,c,d,e,f){a.forEach(function(h){this.commentIDs.push(h);},this);b.forEach(function(h){this.domIDs.push(h);},this);copyProperties(this.blacklistedActors,d);for(var g in e){if(!this.actorToCommentInfoMap[g])this.actorToCommentInfoMap[g]=[];e[g].forEach(function(h){this.actorToCommentInfoMap[g].push(h);},this);}this.newestCommentTimestamp=Math.max(this.newestCommentTimestamp,c);copyProperties(this.commentInfoMap,f);this.attachClickHandlers();},updatePollingParamsCommentas:function(a){this.realTimePollingParams.commentas=a;},attachClickHandlers:function(){for(var a=0;a<this.domIDs.length;a++){var b='li[id="'+this.domIDs[a]+'"]',c=DOM.scry(this.controlledRegion,b);if(c.length===0)continue;var d=c[0],e=DOM.scry(d,'a.uiCloseButton');Event.listen(d,'mouseleave',this.closeStickyMenuFlyouts.bind(this,e));var f=DOM.scry(d,'.fbModerateDropdownContainer');if(f.length>0){var g=f[0],h=DOM.find(g,'.fbModerateDropdownLink');Event.listen(h,'mouseover',function(q,event){CSS.addClass(q,'fbUnderlineText');}.curry(h));Event.listen(h,'mouseout',function(q,event){CSS.removeClass(q,'fbUnderlineText');}.curry(h));var i=DOM.find(g,'.fbModerationDropdownList');Event.listen(h,'click',this.exposeDropDownMenu.bind(this,h,i));Event.listen(i.parentNode,'mouseleave',this.concealDropDownMenu.bind(this,h,i));this.attachDropDownHandlers(d,this.commentIDs[a],i);}var j=this.commentInfoMap[this.commentIDs[a]].actor,k=!!this.recentlyBlacklistedActors[j];if(k){var l=DOM.scry(d,'.fbUndoBlacklistLink');if(l.length>0){var m=l[0];Event.listen(m,'click',this.toggleBlackListAndSync.bind(this,this.commentIDs[a]));}}}var n=DOM.scry(this.controlledRegion,'.fbReplyButton'),o=DOM.scry(this.controlledRegion,'.fbReplyAfterLoginButton');for(var p=0;p<n.length;p++)if(this.loggedIn){CSS.show(n[p]);CSS.hide(o[p]);}else{CSS.hide(n[p]);CSS.show(o[p]);}},closeStickyMenuFlyouts:function(a,event){Toggler.hide();for(var b=0;b<a.length;b++)a[b].blur();},attachDropDownHandlers:function(a,b,c){var d=DOM.scry(c,'.fbBanUser');if(d.length>0){var e=d[0],f=DOM.find(e,'^.fbFeedbackPost');if(startsWith(f.id,b))Event.listen(e,'click',this.toggleBlackListAndSync.bind(this,b));}},exposeDropDownMenu:function(a,b,event){if(CSS.shown(b))return this.concealDropDownMenu(a,b,event);Event.stop(event);CSS.show(b);b.focus();a.blur();return false;},concealDropDownMenu:function(a,b,event){Event.stop(event);CSS.removeClass(a,'fbUnderlineText');CSS.hide(b);a.blur();return false;},registerMoreCommentsLinkHandler:function(a){var b=a.pager_id;if(!ge(b))return;var c=$(b);Event.listen(c,'click',this.fetchMoreComments.bind(this,a,c));},deselectComments:function(a){for(var b=0;b<a.length;b++)delete this.selectedCommentsMap[a[b]];},registerModeratorQueueHandlers:function(a){if(a)this.selectedCommentsMap={};this.selectableComments=this.findSelectableComments();this.selectableCheckboxes=[];this.selectAllCheckBoxes=DOM.scry(this.controlledRegion,'.fbSelectAllCheckbox');this.approveButtons=DOM.scry(this.controlledRegion,'.fbApproveButton');this.removeButtons=DOM.scry(this.controlledRegion,'.fbRemoveButton');for(var b=0;b<this.selectableComments.length;b++){var c=this.selectableComments[b].id,d=!!this.selectedCommentsMap[c];this.setCommentSelection(this.selectableComments[b],d);var e=DOM.find(this.selectableComments[b],'.fbCommentCheckbox');Event.listen(e,'click',this.toggleCommentSelection.bind(this));Event.listen(this.selectableComments[b],'click',this.toggleCommentSelection.bind(this));e.checked=d;this.selectableCheckboxes.push(e);}for(var f=0;f<this.selectAllCheckBoxes.length;f++){this.selectAllCheckBoxes[f].checked=false;this.selectAllCheckBoxes[f].disabled=this.selectableComments.length===0;Event.listen(this.selectAllCheckBoxes[f],'click',this.toggleSelectAllCheckbox.bind(this,this.selectAllCheckBoxes[f]));}for(var g=0;g<this.approveButtons.length;g++)Event.listen(this.approveButtons[g],'click',this.setBulkPrivacy.bind(this,false));for(var h=0;h<this.removeButtons.length;h++)Event.listen(this.removeButtons[h],'click',this.setBulkPrivacy.bind(this,true));},findSelectableComments:function(){var a=DOM.scry(this.controlledRegion,'.fbTopLevelComment'),b=[];for(var c=0;c<a.length;c++)if((DOM.scry(a[c],'.fbCommentCheckbox').length===1)&&(DOM.scry(a[c],'.fbCommentOverlay').length===0))b.push(a[c]);return b;},toggleCommentSelection:function(event){var a={a:true},b=event.getTarget(),c=b.tagName.toLowerCase(),d=b.parentNode.tagName.toLowerCase();if(a[c]||a[d])return;var e=CSS.hasClass(b,'fbFeedbackPost')?b:DOM.find(b,'^.fbFeedbackPost'),f=this.commentIsSelected(e),g=!f;this.setCommentSelection(e,g);this.synchronizeModeratorQueueUI();if(CSS.hasClass(b,'fbCommentCheckbox'))Event.stop(event);},commentIsSelected:function(a){return CSS.hasClass(a,'fbCommentSelected');},setCommentSelection:function(a,b){if(b){this.selectComment(a);}else this.deselectComment(a);},selectComment:function(a){CSS.addClass(a,'fbCommentSelected');this.selectedCommentsMap[a.id]=true;DOM.find(a,'.fbCommentCheckbox').checked=true;},deselectComment:function(a){CSS.removeClass(a,'fbCommentSelected');delete this.selectedCommentsMap[a.id];DOM.find(a,'.fbCommentCheckbox').checked=false;},toggleSelectAllCheckbox:function(a,event){Event.stop(event);var b=a.checked;for(var c=0;c<this.selectableComments.length;c++){this.setCommentSelection(this.selectableComments[c],a.checked);this.selectableCheckboxes[c].checked=b;}this.synchronizeBulkModerationCheckboxes(b);this.synchronizeBulkModerationButtons(b);},synchronizeModeratorQueueUI:function(){var a=0;for(var b=0;b<this.selectableCheckboxes.length;b++)if(this.selectableCheckboxes[b].checked)a++;var c=this.selectableCheckboxes.length>0&&a==this.selectableCheckboxes.length;this.synchronizeBulkModerationCheckboxes(c);this.synchronizeBulkModerationButtons(a>0);},synchronizeBulkModerationCheckboxes:function(a){for(var b=0;b<this.selectAllCheckBoxes.length;b++)this.selectAllCheckBoxes[b].checked=a;},synchronizeBulkModerationButtons:function(a){for(var b=0;b<this.approveButtons.length;b++)Button.setEnabled(this.approveButtons[b],a);for(var c=0;c<this.removeButtons.length;c++)Button.setEnabled(this.removeButtons[c],a);},setBulkPrivacy:function(a,event){Event.stop(event);this.synchronizeBulkModerationButtons(false);selectedCommentIDs=[];for(var b in this.selectedCommentsMap)selectedCommentIDs.push(b);var c={is_private:a,in_moderation_queue:true,comment_ids:selectedCommentIDs,uniqids:selectedCommentIDs,controller_id:this.controllerID,locale:this.locale,owns_pages:this.userOwnsPages,in_aggregated_view:this.inAggregatedView,in_contextual_dialog:this.inContextualDialog};new AsyncRequest().setURI('/ajax/connect/comments/set_bulk_private.php').setData(c).send();return false;},toggleBlackListAndSync:function(a,event){Event.stop(event);var b=this.commentInfoMap[a].actor,c={blacklist:!this.blacklistedActors[b],in_moderation_queue:this.inModerationQueue,comment_id:a,other_comment_ids:this.getOtherCommentsByActor(b,a),uniqid:a,controller_id:this.controllerID,locale:this.locale,owns_pages:this.userOwnsPages,in_aggregated_view:this.inAggregatedView,in_contextual_dialog:this.inContextualDialog};new AsyncRequest().setURI('/ajax/connect/comments/set_blacklist.php').setData(c).setHandler(function(d){this.blacklistedActors[b]=!this.blacklistedActors[b];if(this.blacklistedActors[b]){this.recentlyBlacklistedActors[b]=true;}else delete this.recentlyBlacklistedActors[b];}.bind(this)).send();return false;},getOtherCommentsByActor:function(a,b){return this.actorToCommentInfoMap[a].filter(function(c){return c!=b;});},fetchMoreComments:function(a,b,event){Event.kill(event);CSS.addClass(b,'async_saving');if(this.fetchMoreCommentsIsPending[a.pager_id]===true)return;this.fetchMoreCommentsIsPending[a.pager_id]=true;var c={is_reply_thread:false,in_moderation_queue:false,view_as_moderator:false};copyProperties(c,a);c.offset=this.getVisibleCommentCount(c);if(!c.aggregate_view)delete c.aggregate_view;if(!c.comment_id)delete c.comment_id;if(!c.is_reply_thread)c.comment_ids=this.commentIDs;if(!c.commentas){var d=CommentAdminPanelController.allControllers[c.controller_id];c.commentas=d.realTimePollingParams.commentas;}new AsyncRequest().setURI('/ajax/connect/feedback.php').setReadOnly(true).setData(c).setHandler(function(e){this.fetchMoreCommentsIsPending[a.pager_id]=false;}.bind(this)).send();},getVisibleCommentCount:function(a){var b=this.getCommentsSelector(a),c=this.getCollapsedCommentsSelector(a),d=DOM.scry($(a.controller_id),b);d=d.concat(DOM.scry($(a.controller_id),c));var e=0;for(var f=0;f<d.length;f++)if(!CSS.hasClass(d[f],'fbCommentIgnored'))e++;return e;},getCommentsSelector:function(a){var b=a.is_reply_thread?'li.fbCommentReply':'li.fbTopLevelComment';if(a.controller_id!=a.uniqid)b='div[id="'+a.uniqid+'"] '+b;return b;},getCollapsedCommentsSelector:function(a){var b=a.is_reply_thread?'div.fbCommentReply':'div.fbTopLevelComment';if(a.controller_id!=a.uniqid)b='div[id="'+a.uniqid+'"] '+b;return b;},getRecentlyBlacklistedActors:function(){var a=[];for(var b in this.recentlyBlacklistedActors)a.push(b);return a;},attachContextualDialogHandlers:function(){this.documentClickListener=Event.listen(document.documentElement,'click',this.closeContextualDialog.bind(this));},closeContextualDialog:function(event){var a=event.getTarget(),b=Parent.byClass(a,'fbCommentContext');if(!b)this.destroyContextualDialog();},destroyContextualDialog:function(){this.documentClickListener.remove();delete this.documentClickListener;var a=this.controllerID;Feedback.closeContextualDialog(a);},setRealTimePollingParams:function(a){this.realTimePollingParams=a;},enableTopLevelCommentPolling:function(){this.isTopLevelCommentPollingEnabled=true;},disableTopLevelCommentPolling:function(){this.isTopLevelCommentPollingEnabled=false;},appendComments:function(a,b){var c=ge(a);if(!c)return;var d=DOM.scry(c,'.fbFeedbackReplies')[0];if(!d)return;DOM.appendContent(d,b);},prependComments:function(a,b){var c=DOM.scry(document.documentElement,a)[0];if(!c)return;var d=b.getNodes(),e=[];for(var f=d.length;f-->0;){var g={id:DOM.getID(d[f]),element:d[f]};e.push(g);var h=ge(g.id);if(h){CSS.hide(g.element);this.duplicateComments.push(g.element);for(var i=0;i<e.length;++i)DOM.insertAfter(h,e[i].element);e=[];}}for(f=0;f<e.length;++f)DOM.prependContent(c,e[f].element);setTimeout(this.removeDuplicateComments.bind(this),0);},removeDuplicateComments:function(){for(var a=0;a<this.duplicateComments.length;++a)DOM.remove(this.duplicateComments[a]);this.duplicateComments=[];},pollForComments:function(a){data={locale:this.locale};copyProperties(data,a);if(!data.is_reply_thread)data.comment_ids=this.commentIDs;data.newest_comment_timestamp=this.newestCommentTimestamp;handler=this.handlePollResponse.bind(this);errorHandler=this.handlePollError.bind(this);finallyHandler=this.handlePollFinally.bind(this);new AsyncRequest().setURI('/plugins/comments/poll').setReadOnly(true).setData(data).setMethod('GET').setHandler(handler).setErrorHandler(errorHandler).setFinallyHandler(finallyHandler).send();},handlePollResponse:function(a){},handlePollError:function(a){},handlePollFinally:function(a){}});}
__d("WindowComm",["URI"],function(a,b,c,d,e,f){var g=b('URI'),h={_callbacks:{},makeHandler:function(i,j){j=j||'opener';var k='f'+(Math.random()*(1<<30)).toString(16).replace('.','');h._callbacks[k]=i;return new g('/connect/window_comm.php').setQueryData({_id:k,_relation:j}).getQualifiedURI().toString();},_recv:function(i){var j=new g(i).getQueryData();h._callbacks[j._id](j);}};e.exports=h;a.WindowComm=h;});
__d("ConnectLogin",["AsyncRequest","PopupWindow","URI","WindowComm","XD"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('PopupWindow'),i=b('URI'),j=b('WindowComm'),k=b('XD'),l={init:function(m){this.appID=m.appID;this.addToProfile=m.addToProfile;this.oneClick=m.oneClick;this.channelUrl=m.channelUrl;k.init(m);},login:function(m,n,o){if(this.oneClick&&!n){this._oneClick(m);}else this._openPopup(m,n,o);},logout:function(){k.send({type:'logout'});},_oneClick:function(m){new g().setURI('/ajax/api/tos.php').setData({app_id:this.appID,grant_perm:1}).setHandler(function(n){l._refreshLoginStatus();m&&m();}).send();},_openPopup:function(m,n,o){o=o||{};var p=j.makeHandler(function(t){l._closePopup();if(l.appID)l._refreshLoginStatus();m&&m();}),q=j.makeHandler(function(t){l._closePopup();}),r=new i('/login.php');r.setQueryData({api_key:this.appID,next:p,channel_url:q,cancel_url:q,req_perms:n,v:'1.0',fbconnect:1,add_to_profile:this.addToProfile,display:'popup'});r.addQueryData(o);var s=this._getSize(o);this._popup=h.open(r.toString(),s.height,s.width);},_closePopup:function(){if(this._popup){this._popup.close();this._popup=null;}},_refreshLoginStatus:function(){if(this.channelUrl){k.send({type:'refreshLoginStatus'});}else window.location.reload();},_getSize:function(m){if(m.social_plugin=='registration'){return {width:640,height:370};}else return {width:610,height:280};}};e.exports=l;});
__d("legacy:connect-login",["ConnectLogin"],function(a,b,c,d){a.ConnectLogin=b('ConnectLogin');},3);
add_properties('Feedback',{registerComment:function(a,b){Feedback.comments[a]=b;return Feedback;},getRegisteredComment:function(a){return Feedback.comments[a];},deleteClickHandler:function(a,b,c,d,e,f){var g=new Dialog().setTitle("Delete post?").setBody("Are you sure you want to delete this post?").setButtons([Dialog.newButton('delete',"Delete"),Dialog.CANCEL]).setHandler(function(event){new AsyncRequest().setURI('/ajax/connect/feedback.php').setData({command:'delete',url:a,uniqid:d,owns_pages:e,controller_id:c,locale:f,comment_id:b}).send();}.bind(this)).show();},resizeCommentas:function(a){var b=DOM.scry(a,'div.post')[0];if(b){var c=Vector2.getElementDimensions(b).x;if(c){var d=DOM.find(b,'.commentas'),e=Vector2.getElementDimensions(d).x;if((c-e)<190&&(c-190)>60){Style.set(d,'width',c-190+'px');var f=DOM.scry(d,'span.commentas_inner')[0];if(f){var g=Vector2.getElementDimensions(f).x;Style.set(d,'width',g+'px');}}}}},exposeContextualDialogReply:function(a){var b=$(a),c=b.parentNode.parentNode;CSS.show(DOM.find(c,"form"));DOM.find(c,"textarea").focus();return false;},concealContextualDialogReply:function(a){var b=$(a),c=b.parentNode.parentNode,d=DOM.find(c,"form"),e=DOM.find(c,"textarea"),f=e.value.length;if(!Input.getValue(e))CSS.hide(d);return false;},closeContextualDialog:function(a){var b=LegacyContextualDialog.getInstance($(a));b.hide();return false;},_clickLocked:false,attachOptInClickListener:function(a){Event.listen(a,'click',function(b){Event.kill(b);if(!this._clickLocked){this._clickLocked=true;setTimeout(function(){this._clickLocked=false;}.bind(this),1000);PlatformOptInPopup.open('feedback','plugin.optin');}});},attachReplyListener:function(a){if(!a)return;var b=DOM.find(a,'textarea');a.suppressBlur=false;Event.listen(a,'click',function(c){var d=c.getTarget(),e=Parent.byClass(d,'commentas')!==null,f=Parent.byClass(d,'uiButton')!==null,g=Parent.byClass(d,'uiSelector')!==null;a.suppressBlur=e||f||g;});Event.listen(b,'blur',function(c,d){if(a.interval)return;a.interval=setInterval((function(e,f){if(e.suppressBlur||Input.getValue(f)||f==document.activeElement)return;CSS.hide(e);e.suppressBlur=false;clearInterval(e.interval);delete e.interval;}).curry(a,c),100);}.curry(b));},attachReplyClickListener:function(a,b,c){if(!a)return;var d=DOM.find(a,'textarea');Event.listen(b,'click',function(e){CSS.show(a);d.focus();if(!c.isViewer&&c.isReply){var f=MentionsInput.getInstance(d);if(f){var g=f.getMentions();if(!g[c.uid]&&Input.getValue(d)===''){f.addMention(c);Input.setValue(d,Input.getValue(d)+' ');}}else Input.setValue(d,c.text+' ');}e.preventDefault();});},resetInput:function(a){var b=MentionsInput.getInstance(a);if(b){b.reset();}else Input.setValue(a,'');}});if(!window.Feedback.comments)window.Feedback.comments={};
__d("legacy:control-textarea",["TextAreaControl"],function(a,b,c,d){a.TextAreaControl=b('TextAreaControl');},3);
__d("OpenIDRequest",["AsyncRequest","AsyncSignal","URI","UserAgent","coalesce","copyProperties","createArrayFrom"],function(a,b,c,d,e,f){var g=b('AsyncRequest'),h=b('AsyncSignal'),i=b('URI'),j=b('UserAgent'),k=b('coalesce'),l=b('copyProperties'),m=b('createArrayFrom');function n(){var o=new g().setReadOnly(true).setHandler(this.asyncResponseHandler.bind(this)).setErrorHandler(this.asyncErrorHandler.bind(this));l(this,{openidUrl:null,requestId:n.maxRequestId++,successResponseHandler:null,cancelHandler:null,intermediateHandler:null,immediateMode:false,useExtensions:true,thirdPartyLogin:false,popupWindow:null,asyncRequest:o,retryCount:0});n.requests[this.requestId]=this;}n.getRequestById=function(o){return n.requests[o];};n.prototype.setOpenIDUrl=function(o){this.openidUrl=o;return this;};n.prototype.setSuccessHandler=function(o){this.successResponseHandler=o;return this;};n.prototype.setErrorHandler=function(o){this.errorHandler=o;return this;};n.prototype.setCancelHandler=function(o){this.cancelHandler=o;return this;};n.prototype.setImmediateMode=function(o){this.immediateMode=o;return this;};n.prototype.setUseExtensions=function(o){this.useExtensions=o;return this;};n.prototype.setIntermediateHandler=function(o){this.intermediateHandler=o;return this;};n.prototype.setThirdPartyLogin=function(o){this.thirdPartyLogin=o;return this;};n.prototype.send=function(){if(!this.openidUrl)throw "openidUrl is a required parameter. Call setOpenIDUrl()";var o=this.calculateRedirectUrl();if(!o){this.logMetrics('redirectUrlNotFound');return;}if(this.immediateMode){this.createHiddenIframe(o);}else{if(this.popupWindow)throw "OpenID popup is already in progress";this.showPopup(o);}this.logMetrics('requestSent');};n.prototype.calculateRedirectUrl=function(o){var p=this.immediateMode?'checkid_immediate':'checkid_setup',q={'openid.mode':p},r;if(!n.cache[this.openidUrl])return null;r=n.cache[this.openidUrl].url;var s=i(i(r).getQueryData()['openid.return_to']);s.addQueryData({context:n.context,request_id:this.requestId});q['openid.return_to']=s.toString();q.third_party_login=this.thirdPartyLogin;return i(r).addQueryData(q).getQualifiedURI();};n.prototype.createHiddenIframe=function(o){var p='openid_request_'+this.requestId,q=document.body.appendChild(document.createElement('div')),r=function(){q.innerHTML=('<iframe name="'+p+'"'+' src="'+o.toString()+'"'+' scrolling="no" '+' frameborder="0" class="hidden_elem"></iframe>');};if(j.ie()){q.innerHTML='<iframe src="javascript:false"></iframe>';r.defer();}else r();};n.prototype.showPopup=function(o){var p;if(n.cache[this.openidUrl])p=n.cache[this.openidUrl].popup_dimensions;if(!p||!p.height||!p.width)p={height:'580',width:'790'};var q={x:k(window.screenX,window.screenLeft),y:k(window.screenY,window.screenTop),width:k(window.outerWidth,document.body.clientWidth),height:k(window.outerHeight,document.body.clientHeight)},r=q.x+((q.width-p.width)/2),s=q.y+((q.height-p.height)/2),t=["location=yes","scrollbars=1","left="+r,"top="+s,"resizable=yes","height="+p.height,"width="+p.width].join(",");this.popupWindow=window.open(o.toString(),'_blank',t);this.popupPollInterval=setInterval(this.pollPopupWindow.bind(this),100);this.popupWindow.focus();};n.prototype.pollPopupWindow=function(){if(!(this.popupPollInterval&&this.popupWindow))return;if(this.popupWindow.closed){clearInterval(this.popupPollInterval);this.cancel();}};n.prototype.closePopupIfOpen=function(){if(this.popupWindow){if(this.popupPollInterval)clearInterval(this.popupPollInterval);this.popupWindow.close();}this.popupWindow=null;};n.prototype.cancel=function(){this.closePopupIfOpen();if(this.cancelHandler)this.cancelHandler();this.logMetrics('requestCanceled');};n.prototype.logMetrics=function(o){new h('/ajax/openid/metrics.php',{metric:o,immediate:this.immediateMode,context:n.context,openid_url:this.openidUrl}).send();};n.prototype.triggerCompleteAuthAsync=function(o){if(o.charAt(0)=='?'||o.charAt(0)=='&')o=o.substr(1);var p=i.explodeQuery(o);this.closePopupIfOpen();if(p['openid.mode']=='cancel'){this.cancel();return;}if(this.intermediateHandler)this.intermediateHandler();this.asyncRequest.setData({openid_params:p}).send();};n.prototype.asyncResponseHandler=function(o){var p=o.getPayload();if(this.successResponseHandler)this.successResponseHandler(p);this.closePopupIfOpen();};n.prototype.cleanHandleResponse=function(o){if(o.css)o.css=m(o.css);this.asyncRequest.handleResponse(o);};n.prototype.asyncErrorHandler=function(o){this.closePopupIfOpen();if(o.error==1428010||o.error==1428011){this.cancel();return;}if(this.errorHandler)this.errorHandler(o);};n.prototype.retry=function(){++this.retryCount;this.requestId=n.maxRequestId++;this.send();};n.prototype.setProviderCache=function(o){n.cache=o;return this;};n.cache={};n.requests=[];n.maxRequestId=0;n.context='default';e.exports=n;});
__d("legacy:openid-request",["OpenIDRequest"],function(a,b,c,d){a.OpenIDRequest=b('OpenIDRequest');},3);
__d("legacy:popup-resizer",["PopupWindow"],function(a,b,c,d){a.PopupResizer=b('PopupWindow');},3);
__d("legacy:Selector",["Selector"],function(a,b,c,d){a.Selector=b('Selector');},3);
__d("WidgetArbiter",["createArrayFrom"],function(a,b,c,d,e,f){var g=b('createArrayFrom'),h={_findSiblings:function(){if(h._siblings)return;h._siblings=[];for(var i=parent.frames.length-1;i>=0;i--)try{if(parent.frames[i]&&parent.frames[i].Arbiter&&parent.frames[i].Arbiter.inform)h._siblings.push(parent.frames[i].Arbiter);}catch(j){}},inform:function(){h._findSiblings();var i=g(arguments);h._siblings.forEach(function(j){j.inform.apply(j,i);});}};e.exports=h;});
__d("legacy:widget-arbiter",["WidgetArbiter"],function(a,b,c,d){a.WidgetArbiter=b('WidgetArbiter');},3);
__d("legacy:window-comm",["WindowComm"],function(a,b,c,d){a.WindowComm=b('WindowComm');},3);