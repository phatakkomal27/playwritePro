let browser = "Chrome";
switch (browser) {
    case "Chrome":
    case "Firefox": 
    case "Edge":
        console.log("Supported browser");
        break;
    case "Safari":
        console.log("Partially supported browser");
        break;  
    default:
        console.log("Unsupported browser");
}

