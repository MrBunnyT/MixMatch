import React from 'react'
import { MyBG } from '../../Components/Common/MyBG'
import { FlexWrapper } from '../../Components/Common/Wrappers'
import { ContentContainer, BlogContainer } from '../../Components/Content'
import Navbar from '../../Components/Navbar'
import BlogDummyImage from '../../Assets/Images/BlogDummyImage.jpeg'
import { BlogContent, BlogImage, BlogTitle, BlogImageContainer } from '../../Components/Content/Blog'

export interface HomeComponentProps {
  LoggedIn?: boolean
  ShowAuthIn?: boolean
}

const HomeComponent: React.FC<HomeComponentProps> = (props: HomeComponentProps) => {
  return (
    <MyBG>
      <Navbar {...props} />
      <FlexWrapper>
        <ContentContainer>
          <BlogContainer>
            <BlogImageContainer>
              <BlogImage src={BlogDummyImage} />
              <BlogTitle>This is My Title</BlogTitle>
              <BlogContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel quia excepturi pariatur cumque esse
              dignissimos sunt ea nihil maiores earum consectetur, ut atque veritatis sequi minus voluptatem delectus
              incidunt modi? Sit quae obcaecati expedita eum ad excepturi ullam ea reprehenderit inventore et, aliquam
              quibusdam veniam sequi accusantium nobis atque?
            </BlogContent>
            </BlogImageContainer>
          </BlogContainer>
          <BlogContainer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum sunt, a nisi recusandae officiis, eveniet
            veniam aut dicta libero, dolorum hic. Laudantium et tempora, facere quam perspiciatis, provident minima,
            voluptatibus molestias nobis tempore fugiat! Iste consequatur sunt ipsam minima consequuntur deleniti eaque
            autem nesciunt explicabo saepe laudantium, quos laborum earum excepturi dolore non voluptatum architecto id
            dolores maiores rem? Cumque ducimus alias debitis eos nemo veritatis ex provident aperiam quam delectus.
            Facilis quasi delectus voluptatum, assumenda quis unde, ea, tempora fugiat debitis adipisci suscipit aliquid
            dolore explicabo nemo voluptate consequatur quae. Cupiditate dolorem nemo repellendus provident expedita?
            Modi, laboriosam temporibus.
          </BlogContainer>
        </ContentContainer>
      </FlexWrapper>
    </MyBG>
  )
}

export default HomeComponent
