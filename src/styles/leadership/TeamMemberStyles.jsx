import styled from "styled-components"

export const TeamMemberWrapper = styled.article`
  display: flex;
  flex-direction: column;
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    .left-side {
        padding-right: var(--space-gap);
            min-width: 250px;
            max-width: 400px;
    }
    .right-side {
        min-width: 300px;
        /* max-width: 450px; */
    }
    .desktop {
        display: block;
    }
    .mobile {
        display: none;
    }

  }

  @media only screen and (min-width: 928px) {
    .left-side {
        min-width: 320px;
    }
}
      @media only screen and (min-width: 1024px) {
    .left-side {
        min-width: 300px;
        /* max-width: 350px; */
    }
    .right-side {
        padding-left: var(--space-gap);
        /* max-width: 685px; */
    }
  }
`

export const TeamMemberPhoto = styled.div`
  margin-bottom: var(--space-gap);
  /* padding: 0 var(--space-md); */
  .team-member-photo-container {
  }
`
export const NameAndTitle = styled.div`
  /* text-align: center; */
  margin-bottom: var(--space-gap);
  .team-member-name {
    font-size: var(--font-size-lg);
    font-family: var(--font-heading);
    font-weight: var(--font-weight-regular);
    color: var(--color-accent);
  }
  .team-member-title {
    font-weight: var(--font-weight-semi-bold);
    font-size: 1.17em;
  }
`
export const ContactInfo = styled.div`
  /* text-align: center; */
  margin-bottom: var(--space-gap);
  p {
    /* margin-bottom: 3px; */
    padding-bottom: 5px;
  }
  .contact-item-label {
    font-weight: var(--font-weight-semi-bold);
    color: var(--color-accent);
    margin-right: 10px;
  }
  .contact-item-link {
    color: var(--color-dark);
    font-weight: var(--font-weight-light);
    text-decoration: none;
  }

  @media only screen and (min-width: 1200px) {
    p {
        padding-bottom: 0;
    }
  }
`

export const Bio = styled.div``
