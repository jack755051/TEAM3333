import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

const articleTypes=[ 
    {
        value: 'CUR',
        label: '請選擇',
    },    
    {
    value: 'YXGL',
    label: '遊戲攻略',
    },
    {
    value: 'YXTL',
    label: '遊戲討論',
    },
    {
    value: 'YXFS',
    label: '遊戲分享',
    },
]

const currencies = [
    {
    value: 'CUR',
    label: '請選擇',
    },    
    {
    value: 'FT',
    label: '風聲',
    },
    {
    value: 'LM',
    label: '拉密',
    },
    {
    value: 'SLCS',
    label: '閃靈快手',
    },
    {
    value: 'AWL',
    label: '阿瓦隆',
    },
];
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '30ch',
      },
      button: {
        margin: theme.spacing(1),
      },
    },
  }));

function CreatGameRoomInput() {
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('CUR');
    const [articleType, setArticleTypes] = React.useState('CUR');
    
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    const handleChange2 = (event) => {
        setArticleTypes(event.target.value);
      };
  
    return (
        <>
            <div className="">
                <p className="mb-2 text-3xl text-black">創立遊戲室</p>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField
                        disabled
                        id="yourAccount"
                        label="您的帳號"
                        defaultValue="jack755051"
                        variant="outlined"
                    />
                    
                    <TextField 
                        id="gameRoomName" 
                        label="遊戲室名稱" 
                        variant="outlined" 
                        color="secondary"
                    />
                    <TextField
                        id="gameName"
                        select
                        label="遊戲名稱"
                        value={currency}
                        onChange={handleChange}
                        // helperText="Please select your currency"
                        variant="outlined"
                        color="secondary"
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="articleType"
                        select
                        label="文章類型"
                        value={articleType}
                        onChange={handleChange2}
                        // helperText="Please select your currency"
                        variant="outlined"
                        color="secondary"
                        >
                        {articleTypes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<ArrowForwardIosIcon />}
                    >
                        Send
                    </Button>
                </form>
            </div>
        </>
    )
}

export default CreatGameRoomInput
