import React from "react";
import styles from "../style";
import {
    Footer,
    Navbar,
    Contact,
    Methodology,
    PowerClients,
    NicheSolution,
    LogisticDetails,
    BusinessEfic,
    StickyCards,
    CardsSwiper,
    Testimonials,
} from "../components";
import { Link } from "react-router-dom";
import LogisticElement from "../components/LogisticElement";
import ClientLogo from "../components/ClientLogo";
import { blogs } from "../constants";

const LogisticSoftDev = () => {
    const list1 = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="64px" height="64px"><circle cx="128" cy="128" r="120" fill="#D10028" /><path fill="#B7022D" d="M210.312,40.688C230.575,62.175,243,91.135,243,123c0,66.274-53.726,120-120,120 c-31.865,0-60.825-12.425-82.312-32.688C62.569,233.514,93.591,248,128,248c66.274,0,120-53.726,120-120 C248,93.591,233.514,62.569,210.312,40.688z" /><circle cx="128" cy="128" r="100" fill="#F1F2F2" /><path fill="#FFF" d="M53.296,186.994c-0.602,0-1.196-0.27-1.59-0.785C38.814,169.351,32,149.223,32,128 c0-2.285,0.082-4.598,0.243-6.874c0.079-1.102,1.038-1.925,2.137-1.854c1.102,0.078,1.932,1.035,1.854,2.137 C36.079,123.591,36,125.809,36,128c0,20.337,6.53,39.625,18.884,55.779c0.671,0.877,0.503,2.132-0.374,2.804 C54.147,186.86,53.72,186.994,53.296,186.994z M35.147,115.322c-0.104,0-0.208-0.008-0.313-0.025 c-1.091-0.171-1.836-1.195-1.665-2.287l0.134-0.827c0.182-1.089,1.209-1.824,2.302-1.643c1.089,0.182,1.825,1.212,1.643,2.302 l-0.128,0.79C36.965,114.618,36.114,115.322,35.147,115.322z" /><path fill="#E6E7E8" d="M193.534,52.466C208.774,70.017,218,92.931,218,118c0,55.228-44.771,100-100,100 c-25.069,0-47.983-9.226-65.534-24.466C70.801,214.648,97.841,228,128,228c55.229,0,100-44.772,100-100 C228,97.841,214.648,70.801,193.534,52.466z" /><path fill="#D1D3D4" d="M196.162,54.838C212.809,72.699,223,96.658,223,123c0,55.228-44.771,100-100,100 c-26.342,0-50.301-10.191-68.162-26.838C73.093,215.747,99.114,228,128,228c55.229,0,100-44.772,100-100 C228,99.114,215.747,73.093,196.162,54.838z" /><path fill="#414042" d="M98.369,154.919c-0.791,0-1.594-0.188-2.341-0.585l-42.757-22.71c-1.634-0.868-2.655-2.566-2.655-4.416 s1.021-3.548,2.655-4.416l42.757-22.71c2.438-1.295,5.467-0.368,6.761,2.07c1.295,2.438,0.369,5.466-2.07,6.761l-34.443,18.295 l34.443,18.294c2.439,1.295,3.366,4.323,2.071,6.761C101.891,153.955,100.16,154.919,98.369,154.919z" /><path fill="#414042" d="M159.862,154.919c-1.79,0-3.521-0.964-4.42-2.656c-1.295-2.438-0.368-5.466,2.07-6.761l34.444-18.294 l-34.444-18.294c-2.438-1.295-3.365-4.323-2.07-6.761c1.296-2.44,4.322-3.365,6.762-2.071l42.758,22.71 c1.633,0.868,2.654,2.566,2.654,4.416s-1.021,3.548-2.654,4.416l-42.758,22.71C161.456,154.731,160.653,154.919,159.862,154.919 z" /><g><path fill="#414042" d="M115.51,167.537c-0.598,0-1.205-0.108-1.796-0.335c-2.577-0.993-3.861-3.886-2.869-6.463l27.21-70.654 c0.992-2.578,3.886-3.861,6.463-2.869c2.577,0.993,3.861,3.886,2.869,6.463l-27.21,70.654 C119.412,166.319,117.518,167.537,115.51,167.537z" /></g><g><path fill="#D10028" d="M37.219,86.02l172.516,99.602c3.941-5.58,7.322-11.582,10.068-17.924L47.732,68.353 C43.651,73.836,40.122,79.753,37.219,86.02z" /></g></svg>,
            line: "No-code / Low-code solution development"
        },
    ]
    const list = [
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
        {
            svg: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="35px" height="35px"><linearGradient id="V9FaeHCpM9DSruvDAuxa8a" x1="16.86" x2="29.576" y1="660.467" y2="620.454" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c77740" /><stop offset="1" stop-color="#b0622b" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8a)" d="M38,4H26c0,1.105-0.895,2-2,2s-2-0.895-2-2H10C8.895,4,8,4.895,8,6v36c0,1.105,0.895,2,2,2h28	c1.105,0,2-0.895,2-2V6C40,4.895,39.105,4,38,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8b" x1="24" x2="24" y1="625.034" y2="621.107" gradientTransform="matrix(1 0 0 -1 0 662)" gradientUnits="userSpaceOnUse"><stop offset=".442" stop-color="#878786" /><stop offset=".594" stop-color="#9f9f9e" /><stop offset=".859" stop-color="#c3c3c3" /><stop offset="1" stop-color="#d1d1d1" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8b)" d="M37,42H11c-0.552,0-1-0.448-1-1v-9h28v9C38,41.552,37.552,42,37,42z" /><path fill="#f3f3f3" d="M37,40H11c-0.552,0-1-0.448-1-1V7c0-0.552,0.448-1,1-1h26c0.552,0,1,0.448,1,1v32	C38,39.552,37.552,40,37,40z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8c" x1="-314.93" x2="-313.046" y1="860.928" y2="853.091" gradientTransform="matrix(-1 0 0 1 -290 -851)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c3cdd9" /><stop offset="1" stop-color="#9fa7b0" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8c)" d="M31,8V4h-4.184C26.403,2.837,25.304,2,24,2s-2.403,0.837-2.816,2H17v4c0,0.552,0.448,1,1,1h12	C30.552,9,31,8.552,31,8z M24,4c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,4,24,4z" /><linearGradient id="V9FaeHCpM9DSruvDAuxa8d" x1="15" x2="33" y1="25.577" y2="25.577" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#3079d6" /><stop offset="1" stop-color="#297cd2" /></linearGradient><path fill="url(#V9FaeHCpM9DSruvDAuxa8d)" d="M21.49,31.771l-6.261-6.261c-0.306-0.306-0.306-0.801,0-1.107l1.107-1.107	c0.306-0.306,0.801-0.306,1.107,0l4.601,4.601l8.514-8.514c0.306-0.306,0.801-0.306,1.107,0l1.107,1.107	c0.306,0.306,0.306,0.801,0,1.107L22.597,31.771C22.291,32.076,21.796,32.076,21.49,31.771z" /></svg>,
            line: "Digitize routine mundane tasks"
        },
    ]
    const fewBlogs = blogs.slice(0, 3)
    return (
        <div className="bg-primary w-full overflow-hidden">

            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            {/* Change the Imgae Url in below section to change the image used in Logistic Page */}
            <section style={{ backgroundPosition: '70%' }} className="py-14 bg-cover bg-no-repeat md:h-[32.875rem] h-[42.875rem] w-full bg-[url('https://i.ibb.co/qr9vWXH/DALL-E-2023-05-27-23-58-51-a-landscape-black-background-with-white-fading-stripes-on-its-corners.png')]">
                <div className="flex py-10 pt-12 h-full w-full md:mt-0 mt-12 justify-center">
                    <div className="font-poppins banner-content text-center md:py-7">
                        <p className="text-white tracking-widest">
                            LOGISTICS & TRANSPORTATION SOFTWARE DEVELOPMENT COMPANY
                        </p>
                        <h1 className="md:text-[50px]  text-[40px] font-medium text-white mb-10 max-w-4xl leading-normal mx-auto">
                            <span className="text-secondary">Boosting</span> logistics & Transportation Efficiency
                        </h1>
                        <p className="text-white text-lg">
                            With our deep industry expertise and customized approach, we can help you realize the full potential of your logistics & transportation operations. And drive increased visibility and profitability for your business.
                        </p>
                        <Link to="/request-quote" className="">
                            <button className="border-2 border-secondary mt-12 rounded-full bg-transparent text-secondary text-xl px-10 py-2 transition duration-300 hover:bg-secondary hover:text-primary ">
                                Talk to expert
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="flex justify-center pt-10 sm:pt-0 font-poppins items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] w-full">
                    <LogisticElement list={list} />
                </div>
            </section>
            <BusinessEfic />
            <LogisticDetails />
            <NicheSolution />
            <PowerClients />
            <Methodology />
            <section className="bg-black-gradient-2 font-poppins flex justify-center items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] w-full flex flex-col">
                    <ClientLogo />
                </div>
            </section>
            <section className="bg-secondary font-poppins flex justify-center py-20 items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] justify-between w-full flex flex-col">
                    <div className="text-4xl font-medium mb-10 text-white leading-normal">
                        <h1>
                            Choose us <span className="text-primary">because</span>
                        </h1>
                    </div>
                    <div className="text-primary mb-11">
                        Our software development services are designed for you, your customers, and your business growth.
                    </div>
                    <StickyCards isCol={false} list={list1} />
                    <div className="flex w-full justify-center">
                        <Link to="/request-quote">
                            <button className="border-2 border-primary mt-12 rounded-full bg-transparent text-primary text-xl px-10 py-2 transition duration-300 hover:bg-primary hover:text-white ">
                                Let's build a great logistic software
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="font-poppins flex justify-center py-20 items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] justify-between w-full flex flex-col">
                    <div className="text-4xl font-medium mb-10 text-white leading-normal">
                        <h1>
                            Look at our <span className="text-secondary">success stories</span>
                        </h1>
                    </div>
                    <div className="text-secondary mb-11">
                        Identify how our experts solved business challenges leveraging technology by reading case studies.
                    </div>
                    <div>
                        <CardsSwiper />
                    </div>
                </div>
            </section>
            <section className="font-poppins flex justify-center items-start sm:px-16 px-6">
                <div className="xl:max-w-[1280px] justify-between w-full flex flex-col">
                    <Testimonials />
                </div>
            </section>
            <section className="sm:px-16 px-6 flex justify-center items-start font-poppins pt-14">
                <div className="xl:max-w-[1280px] flex flex-col w-full pb-10">
                    <div className="text-white">
                        <div className="text-5xl font-medium pb-5">
                            Knowledge <span className="text-secondary">hub</span>
                        </div>
                        <div>
                            Get the right knowledge by reading our well-researched blogs and staying ahead of the curve.
                        </div>
                    </div>
                    <div className="w-full flex-wrap flex gap-5 justify-center  mt-10">
                        {fewBlogs.map((content, index) => (
                            <Link key={index} to={content.link} className="w-80 mb-5">
                                <div className=" sm:mr-6">
                                    <div className="overflow-hidden">
                                        <img src={content.img} className="w-full h-full object-cover object-center transition duration-500 scale-100 hover:scale-105 rounded" alt="" />
                                    </div>
                                    <div className="text-white mt-6 transition duration-500 hover:text-secondary">
                                        {content.content}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="w-full flex justify-center mt-14">
                        <Link to="/blog">
                            <div className="text-secondary hover:text-white transition-colors duration-500">
                                View more blogs
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <div className={`bg-primary pt-10 ${styles.flexStart} ${styles.paddingX}`}>
                <div className={`${styles.boxWidth}`}>
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LogisticSoftDev;