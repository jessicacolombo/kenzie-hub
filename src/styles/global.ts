import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        //Collor Palette
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative:#59323F;
        --grey-0: #F8F9FA;
        --grey-1: #868E96;
        --grey-2: #343B41;
        --grey-3: #212529;
        --grey-4: #121214;
        --success: #3FE864;
        --negative: #E83F5B;

        //Typography
        --wheight-1: 700;
        --wheight-2: 600;
        --wheight-3: 400;
        --title: 16px;
        --headline: 12px;

        //Border-radius
        --border-radius: 4px;

    }

    * {
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
    }

    html{
        background-color: var(--grey-4);
    }

    body{
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

`;
