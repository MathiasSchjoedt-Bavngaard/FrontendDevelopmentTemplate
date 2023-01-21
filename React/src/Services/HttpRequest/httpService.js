import authenHeader from "../authenticator-header";
const API_URL = "https://localhost:7181/api/";

//#region Jobs HTTP requests
export async function getJobs() {
  try {
    const response = await fetch(API_URL + "Jobs/", {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getjob Error in httpService: " + e);
  }
}

export async function getJobById(id) {
  try {
    const response = await fetch(API_URL + "Jobs/" + id, {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getjob Error in httpService: " + e);
  }
}

//post a job from the form
export async function postJob(newJob) {
  try {
    const response = await fetch(API_URL + "Jobs/", {
      method: "POST",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(newJob),
    });
    return response;
  } catch (e) {
    console.log("postjob Error in httpService: " + e);
  }
}

//update a job from the form
export async function updateJob(id, updatedJob) {
  try {
    const response = await fetch(API_URL + "Jobs/" + id, {
      method: "PUT",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(updatedJob),
    });
    return response;
  } catch (e) {
    console.log("updatejob Error in httpService: " + e);
  }
}

//delete a job from the form
export async function deleteJob(id) {
  try {
    const response = await fetch(API_URL + "Jobs/" + id, {
      method: "DELETE",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("deletejob Error in httpService: " + e);
  }
}

export async function deleteModelFromJob(JobID, ModelID) {
  try {
    console.log("test");
    const response = await fetch(API_URL + "Jobs/" + JobID + "/model/" + ModelID, {
      method: "DELETE",
      headers: authenHeader(),
      produser: "Andreas Halse",
    });
    return response;
  } catch (e) {
    console.log("Remove model from job error in httpService")
  }
}
//#endregion



//#region Model HTTP requests
export async function getModels() {
  try {
    const response = await fetch(API_URL + "Models/", {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getModels Error in httpService: " + e);
  }
}

export async function postModel(newModel) {
  try {
    const response = await fetch(API_URL + "Models/", {
      method: "POST",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(newModel),
    });
    return response;
  } catch (e) {
    console.log("postmodel Error in httpService: " + e);
  }
}

export async function getModelbyId(id) {
  try {
    const response = await fetch(API_URL + "Models/" + id, {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getmodel Error in httpService: " + e);
  }
}

export async function updateModel(id, updatedModel) {
  try {
    const response = await fetch(API_URL + "Models/" + id, {
      method: "PUT",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(updatedModel),
    });
    return response;
  } catch (e) {
    console.log("updateModel Error in httpService: " + e);
  }
}

export async function deleteModel(id) {
  try {
    const response = await fetch(API_URL + "Models/" + id, {
      method: "DELETE",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("deleteModel Error in httpService: " + e);
  }
}



export async function getModelsJobinfo(id) {
  try {
    const response = await fetch(API_URL + "Models/" + id + "/Jobs", {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getModels Error in httpService: " + e);
  }
}
export async function postModelonJob(JobId,ModelId) {
  try {
    const response = await fetch(API_URL + "Jobs/" + JobId + "/model/"+ModelId, {
      method: "POST",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getModels Error in httpService: " + e);
  }
}

//#endregion

//#region Manegers HTTP requests

export async function getManagers() {
  try {
    const response = await fetch(API_URL + "Managers/", {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getManagers Error in httpService: " + e);
  }
}

export async function postManager(newManager) {
  try {
    const response = await fetch(API_URL + "Managers/", {
      method: "POST",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(newManager),
    });
    return response;
  } catch (e) {
    console.log("postManager Error in httpService: " + e);
  }
}

export async function getManagerById(id) {
  try {
    const response = await fetch(API_URL + "Managers/" + id, {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getManagerById Error in httpService: " + e);
  }
}

export async function updateManager(id, updatedManager) {
  try {
    const response = await fetch(API_URL + "Managers/" + id, {
      method: "PUT",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(updatedManager),
    });
    return response;
  } catch (e) {
    console.log("updateManager Error in httpService: " + e);
  }
}

export async function deleteManager(id) {
  try {
    const response = await fetch(API_URL + "Managers/" + id, {
      method: "DELETE",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("deleteManager Error in httpService: " + e);
  }
}

//#endregion

//#region Expenses HTTP requests
export async function getExpenses() {
  try {
    const response = await fetch(API_URL + "Expenses/", {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getExpenses Error in httpService: " + e);
  }
}

export async function postExpense(newExpense) {
  try {
    const response = await fetch(API_URL + "Expenses/", {
      method: "POST",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(newExpense),
    });
    return response;
  } catch (e) {
    console.log("postExpense Error in httpService: " + e);
  }
}

export async function getExpenseById(id) {
  try {
    const response = await fetch(API_URL + "Expenses/" + id, {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getExpenseById Error in httpService: " + e);
  }
}

export async function updateExpense(id, updatedExpense) {
  try {
    const response = await fetch(API_URL + "Expenses/" + id, {
      method: "PUT",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(updatedExpense),
    });
    return response;
  } catch (e) {
    console.log("updateExpense Error in httpService: " + e);
  }
}

export async function deleteExpense(id) {
  try {
    const response = await fetch(API_URL + "Expenses/" + id, {
      method: "DELETE",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("deleteExpense Error in httpService: " + e);
  }
}

export async function getExpensesModelinfo(Modelid) {
  try {
    const response = await fetch(API_URL + "Expenses/model/" + Modelid, {
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
    });
    return response;
  } catch (e) {
    console.log("getExpensesModelinfo Error in httpService: " + e);
  }
}

//#endregion

//#region Account HTTP requests
export async function postAccountLogin(Email, Password) {
  const tempLoginInfo = {
    email: Email,
    password: Password,
  };

  try {
    const repsonse = await fetch(API_URL + "Account/login/", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(tempLoginInfo),
    });
    if (repsonse.ok) {
      //make response jason and save token
      const jason = await repsonse.json();
      localStorage.setItem("token", jason.jwt);

      // Finder rollen ud fra JWT og gemmer lokalt under "role"
      let RoleExtracted = parseToJwt(jason.jwt);

      console.log(RoleExtracted);
      let role =
        RoleExtracted[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ];

      localStorage.setItem("role", role);

      //in case login is model - set modelid in localstorage
      if (role === "Model") {
        console.log(RoleExtracted["ModelId"]);
        localStorage.setItem("ModelId", RoleExtracted["ModelId"]);
        return "Model";
      } else {
        return "Manager";
      }
    } else {
      console.log("Login parcing failed");
      return "Failed";
    }
  } catch (e) {
    //catch error
    console.log("postAccountLogin Error in httpService: " + e);
  }
}

// Hjælpefunktion til Login - parser JWT
function parseToJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export async function updateAccountPassword(Email, OldPassword, NewPassword) {
  const tempUpdateInfo = {
    email: Email,
    oldPassword: OldPassword,
    newPassword: NewPassword,
  };

  try {
    const jwt = await fetch(API_URL + "Account/Password/", {
      method: "PUT",
      headers: authenHeader(),
      produser: "Mathias Schjødt-Bavngaard",
      body: JSON.stringify(tempUpdateInfo),
    });
    return jwt;
  } catch (e) {
    console.log("updateAccountPassword Error in httpService: " + e);
  }
}

//#endregion
