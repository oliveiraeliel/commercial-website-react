import styled from "styled-components";

export const Nav = styled.nav`
  position: relative;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid var(--color-lapis-lazuli);
`;

export const Logo = styled.a`
  padding: 1rem 0;
  text-decoration: none;
  outline: none;
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1209px) {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1209px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
`;

export const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Search = styled.input`
  outline: none;
  border: 1px solid var(--color-lapis-lazuli);
  border-radius: 14px 0 0 14px;
  width: 40vw;
  padding: 0.3rem;
`;
