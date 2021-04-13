import {MikroORM} from "@mikro-orm/core";
import {Post} from "./entities/Post";
import microConfig from './mikro-orm.config';

const main = async () => {
    const orm = await MikroORM.init(microConfig);

    const post = orm.em.create(Post, {title: 'my first post'})

    await orm.em.persistAndFlush(post);

}

main().catch(err => {
    console.log(err)
});