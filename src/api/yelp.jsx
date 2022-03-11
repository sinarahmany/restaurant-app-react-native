import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Ey33FLzY_MsbsBhwzuP8PnR4BYkuF54uxqZsoQJhPdaulYOGXgDmyLi77N_FFA6PneDmnvWYEFd-x8mBIyA13Zr3E8whrwnDR_mavnBH6EmGuB8Ou_nW8rQ2BocpYnYx'
    }
});

