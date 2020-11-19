import styled from "styled-components";

export const SectionDiv = styled.div`

    @media screen and (min-width: 1024px){
        flex-direction: ${ ({imgOrientation})  => imgOrientation ? 'row' : 'row-reverse'};
        justify-content: center;
    }
`