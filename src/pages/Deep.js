import Layout from "../components/Layout/Layout";
import axios from "axios";
import "./pages.css";
import {
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const Deep = (deepId) => {
  // 수정 기능 추가?
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const maxDescriptionLength = 250; // description 최대 길이

  const items = [
    {
      bookId: 1,
      title: "강아지똥",
      description:
        "강아지의 똥은 그들이 우리 삶에 불가리할 뿐만 아니라, 우리와 그들 사이의 독특한 연결을 나타내는 작은 표지판이다. 그것은 우리가 함께하는 시간 동안 그들의 건강과 행복을 감시하는 일부가 된다. 똥 한 톨 한 톨은 우리 강아지가 건강하게 성장하고 살아가고 있다는 증거다. 강아지의 건강은 우리의 관심과 사랑으로부터 비롯되며, 우리는 그들의 삶의 품질을 유지하기 위해 항상 주의를 기울여야 한다. 똥은 또한 우리가 함께하는 모험과 산책의 일부다. 강아지와 함께하는 나들이 중에는 때로는 그들의 배설물을 처리하는 일이 필요하곤 한다. 그 순간들은 우리가 함께하는 특별한 경험의 한 부분이며, 그들과의 연결을 더욱 강하게 만들어 준다. 그래서, 강아지의 똥은 단순히 배설물이 아니라 우리와 그들 사이의 특별한 유대감과 함께하는 여정의 일부이다. 그것은 우리의 사랑과 관심이 담긴 작은 표현이며, 우리와 우리 강아지의 특별한 결합을 상징한다.",
      image:
        "https://shopping-phinf.pstatic.net/main_3248362/32483620709.20240511071018.jpg",
    },
    {
      bookId: 2,
      title: "겨울왕국",
      description: "가슴이 웅장해지는 겨울왕국 숨은그림찾기",
      image:
        "https://shopping-phinf.pstatic.net/main_3248509/32485093579.20220530151750.jpg",
    },
  ];

  // const searchDeep = async (deepId) => {};

  // description이 지정된 길이를 초과할 경우 자르는 함수
  const truncateDescription = (description) => {
    if (description.length > maxDescriptionLength) {
      return description.substring(0, maxDescriptionLength) + "...";
    }
    return description;
  };

  return (
    <Layout>
      <div
        className="page_layer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h4" fontWeight={"bold"}>
          Deep 정보
        </Typography>
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Typography variant="h6" fontWeight={"bold"}>
            눈 오는 날 읽은 책 모음
          </Typography>
          <Typography variant="h8" color={"primary"}>
            겨울이 다가오면 생각나는 책들을 모아봤다
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            {items.map((item, index) => (
              <Card
                key={index}
                variant="outlined"
                style={{ marginBottom: "15px", display: "flex" }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  style={{
                    objectFit: "contain",
                    width: "180px",
                    height: "180px",
                  }}
                />
                <CardContent style={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography gutterBottom variant="h7" component="div">
                        {item.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2" color="text.secondary">
                        {truncateDescription(item.description)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                color="accent"
                variant="outlined"
                // href="/addbook"
                style={{ margin: "5px" }}
              >
                뒷북 추가하기 +
              </Button>

              <Button
                color="accent"
                variant="contained"
                style={{ margin: "5px" }}
              >
                뒷북 추천받기!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deep;
