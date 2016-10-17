<%@ WebHandler Language="C#" Class="books" %>

using System;
using System.Web;

public class books : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        //context.Response.ContentType = "text/plain";
        //context.Response.Write("Hello World");
        context.Response.Write("Ext.data.JsonP.callback1({\"books\" : [{\"name\":\"Sample\"}]})");
    }
 
    public bool IsReusable {
        get {
            return false;
        }
    }

}