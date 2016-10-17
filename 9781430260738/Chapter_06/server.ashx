<%@ WebHandler Language="C#" Class="server" %>

using System;
using System.Web;

public class server : IHttpHandler {
    
    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "application/json";
        HttpResponse Response = context.Response;
        int limit = int.Parse(context.Request["limit"]);
        int start = int.Parse(context.Request["start"]);
        String output = "{total : 5000,output : [";
        for (int i = (start+1); i <= (start + limit); i++) {
            output += "{sno:" + i + ",value:'Value is " + i + "'}";
            if(i < (start + limit))
                output += ",";
        }
        output += "]}";
        Response.Write(output);
    }

    public bool IsReusable
    {
        get {
            return false;
        }
    }

}