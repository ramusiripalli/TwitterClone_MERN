export const signup = async(req,res)=>{
     res.json({
        data:"you hit the signup endpoint",
     });
}

export const login = async(req,res)=>{
    res.json({
data:"You hit the signin endpoint"
    });
}
export const logout = async(req,res)=>{
    res.json({
        data:"YOu hit the logout  endpoint"
    })
    }

