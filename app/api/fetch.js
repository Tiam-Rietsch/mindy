import * as SecureStore from "expo-secure-store";
import {
  allChaptersEndpoint,
  allSkillsEndpoint,
  createLessonEndpoint,
  loginEndpoint,
  updateCurrentChapterEndpoint,
  validateChapterEndpoint,
} from "./endpoints";
import { getTextOfJSDocComment } from "typescript";

/**
 *
 * @param {the email of the user} email
 * @param {the password of the user} password
 * @returns a token
 */
export const signin = async (email, password) => {
  try {
    let response = await fetch(loginEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail: email,
        password: password,
      }),
    });
    if (!response) throw Error("The response did not work");

    let data = await response.json();
    return data["jwt"];
  } catch (error) {
    console.log(error);
  }
};

export const getAuthToken = async () => {
  return await SecureStore.getItemAsync("authToken");
};

export const getCompetences = async () => {
  try {
    let token = await getAuthToken();

    if (!token)
      throw Error("the user token could not be found (getCompetences)");

    let response = await fetch(allSkillsEndpoint, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getChapters = async (id) => {
  try {
    let token = await getAuthToken();
    if (!token) throw Error("the token could not be found (getChapters)");

    let response = await fetch(allChaptersEndpoint(id), {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const validateChapter = async (id) => {
  try {
    let token = await getAuthToken();
    let response = await fetch(validateChapterEndpoint(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.status == 3002) return true;
  } catch (error) {
    console.error(error);
  }
};

export const setCurrentChapter = async (id) => {
  try {
    let token = await getAuthToken();
    let response = await fetch(updateCurrentChapterEndpoint(id), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });
    if (response.status === 3003) return true;
  } catch (error) {
    console.error(error);
  }
};

export const getLoessons = async (chapterId) => {
  console.log(chapterId)
  try {
    let token = await getAuthToken()
    let response = await fetch(createLessonEndpoint, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify(chapterId)
    })

    let data = await response.json()
    return data
  } catch(error) {
    console.error(error)
  }
}