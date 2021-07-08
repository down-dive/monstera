import { Grid } from '@material-ui/core';
import resource from '../../resource.json';
import ResourceCard from '../ResourceCard';
import Button from '@material-ui/core/Button';

const Resources = () => {
    return (
        <Grid container spacing={3}>
            {
                resource.map(resource => {
                    return (
                        <Grid item xs={12} key={resource.id}>
                            <ResourceCard
                                name={resource.name}
                                description={resource.description}
                                url={resource.url}
                                image={resource.image}
                            />
                            {/* <Button size="small" color="primary">
                    <a href={resource.url}>Learn More</a>
                </Button> */}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
};

export default Resources;