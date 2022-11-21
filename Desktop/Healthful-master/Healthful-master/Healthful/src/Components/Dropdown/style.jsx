import styled from "styled-components";

export const Container = styled.div`
    

`;
export const Dropdownbtn = styled.div`


`;
export const Dropdowncontent = styled.div`


`;
export const Dropdownitem = styled.div`


`;


export const Dropdown = styled.div`
> ${Dropdownbtn}{
    padding: 3%;
    width: 200px;
    margin-bottom: 2%;

}

> ${Dropdowncontent}{
    position: absolute;
    top: auto;
    align-items: center;
    margin-top: 0.5%;
    text-align: center;
    -webkit-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.08);
    -moz-box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.08);
    box-shadow: 3px 3px 0px -1px rgba(0,0,0,0.08);
    width: 200px;


    > ${Dropdownitem}{
        align-items: center;
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
        padding: 3%;
        text-decoration: none;

        
        :hover {background: #ffffff;}

    }
}


`;